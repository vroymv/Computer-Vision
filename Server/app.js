//Importing Required Libraries
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { main, PostImage } = require("./database.js");
const fs = require("fs");

app.use(bodyParser.raw({ type: "image/jpeg", limit: "50mb" }));

//Creating an instance of RekognitionClient
const {
  RekognitionClient,
  DetectLabelsCommand,
  DetectTextCommand,
  DetectCustomLabelsCommand,
  DetectFacesCommand,
} = require("@aws-sdk/client-rekognition");

//Creating an instance Of Polly Client
const {
  PollyClient,
  SynthesizeSpeechCommand,
} = require("@aws-sdk/client-polly");

//Initializing Mongo
main();

//Setting dynamic port
const port = process.env.PORT || 3000;

// Configuring RekognitionClient
const client = new RekognitionClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

//Configuring  PollyClient
const pollyClient = new PollyClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.post("/", async (req, res) => {
  try {
    console.log("processing image");
    const imageData = Buffer.from(req.body, "base64");

    // Labels Input
    const labelsInput = {
      Image: {
        Bytes: imageData,
      },
      MaxLabels: 10,
      MinConfidence: 70,
    };

    //Text Input
    const tetxInput = {
      Image: {
        Bytes: Buffer.from(imageData, "base64"),
      },
    };

    //Custom Labels Input
    const customLabelsInput = {
      Image: {
        Bytes: Buffer.from(imageData, "base64"),
      },
      MaxResults: 100,
      ProjectVersionArn:
        "arn:aws:rekognition:us-east-1:339712911556:project/Computer-vision/version/Computer-vision.2024-05-03T01.13.45/1714679026972",
    };

    //Facial Analysis Input
    const detectFacesInput = {
      Image: {
        Bytes: Buffer.from(imageData, "base64"),
      },
      Attributes: ["ALL"],
    };

    const labelCommand = new DetectLabelsCommand(labelsInput);
    const detectedLabels = await client.send(labelCommand);

    const textCommand = new DetectTextCommand(tetxInput);
    const detectedText = await client.send(textCommand);

    const customLabelsCommand = new DetectCustomLabelsCommand(
      customLabelsInput
    );
    const detectedCustomLabels = await client.send(customLabelsCommand);

    const detectFacesCommand = new DetectFacesCommand(detectFacesInput);
    const detectedFaces = await client.send(detectFacesCommand);

    const labelsOutput = {
      Name: detectedLabels.Labels[0].Name,
      Confidence: `${detectedLabels.Labels[0].Confidence}%`,
      Category: detectedLabels.Labels[0].Categories[0].Name,
    };

    processedText = detectedText.TextDetections.map(function (item) {
      return item.DetectedText;
    });

    //Treating Detected Text
    const halfIndex = Math.ceil(processedText.length / 2);
    const text = processedText.slice(0, halfIndex).join(" ");

    //Treating Custom labels
    allLabelNames = detectedCustomLabels.CustomLabels.map(function (item) {
      return item.Name;
    });
    const uniqueValues = [...new Set(allLabelNames)];
    customLabelsOutput = uniqueValues;

    //Treating Face Analysis
    const detectdFacesOutput = {
      Age: `${detectedFaces?.FaceDetails[0]?.AgeRange?.Low} to ${detectedFaces?.FaceDetails[0]?.AgeRange?.High}`,
      Beard: detectedFaces?.FaceDetails[0]?.Beard?.Value,
      Emotions: detectedFaces?.FaceDetails[0]?.Emotions?.filter(
        (obj) => obj.Confidence > 85
      ).map((obj) => obj.Type),
      EyeGlasses: detectedFaces?.FaceDetails[0]?.Eyeglasses.Value,
      EyesOpen: detectedFaces?.FaceDetails[0]?.EyesOpen?.Value,
      Gender: detectedFaces?.FaceDetails[0]?.Gender?.Value,
      MouthOpen: detectedFaces?.FaceDetails[0]?.MouthOpen?.Value,
      Mustache: detectedFaces?.FaceDetails[0]?.Mustache?.Value,
      Sunglasses: detectedFaces?.FaceDetails[0]?.Sunglasses?.Value,
      Smile: detectedFaces?.FaceDetails[0]?.Smile?.Value,
    };

    //Polly Input
    const pollyInput = {
      Engine: "neural",
      LanguageCode: "en-IN",
      OutputFormat: "mp3",
      Text: labelsOutput.Name,
      VoiceId: "Kajal",
      TextType: "text",
    };

    const pollyCommand = new SynthesizeSpeechCommand(pollyInput);
    const pollyResponse = await pollyClient.send(pollyCommand);

    const audioStream = pollyResponse.AudioStream;

    // Convert stream to buffer
    const chunks = [];
    for await (const chunk of audioStream) {
      chunks.push(chunk);
    }
    const audioBuffer = Buffer.concat(chunks);

    fs.writeFileSync("output.mp3", audioBuffer);

    //Returning response
    res
      .status(200)
      .json({ detectdFacesOutput, labelsOutput, text, customLabelsOutput });
    console.log("Done processing, response sent");

    //Converting Image to Base64 to save in Mongo
    const ImgBase64Data = btoa(
      new Uint8Array(imageData).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    const imageUrl = `data:image/jpeg;base64,${ImgBase64Data}`;

    //Converting Audio to Base64 to save in Mongo
    const mp3Base64 = audioBuffer.toString("base64");
    const mp3Url = `data:audio/mp3;base64,${mp3Base64}`;

    console.log("Storing analysis in database");
    // Saving Image to Mongo
    const newPost = new PostImage({
      rekogImage: imageUrl,
      labels: labelsOutput,
      text: text,
      customLabel: customLabelsOutput,
      labelConfidence: labelsOutput.Confidence,
      time: new Date(),
      facialAnalysis: {
        Age: detectdFacesOutput.Age,
        Beard: detectdFacesOutput.Beard,
        Emotions: detectdFacesOutput.Emotions,
        EyeGlasses: detectdFacesOutput.EyeGlasses,
        EyesOpen: detectdFacesOutput.EyesOpen,
        Gender: detectdFacesOutput.Gender,
        MouthOpen: detectdFacesOutput.MouthOpen,
        Mustache: detectdFacesOutput.Mustache,
        Sunglasses: detectdFacesOutput.Sunglasses,
        Smile: detectdFacesOutput.Smile,
      },
      audio: mp3Url,
    });

    await newPost.save();
  } catch (error) {
    console.log(error);
  }
});

//Configuring  Home Route
app.get("/", async (req, res) => {
  try {
    res.json({ message: "Home" });
  } catch (error) {
    console.log(error);
  }
});

//Configuring  Database Route
app.get("/database", async function (req, res) {
  console.log("pooling from database");
  try {
    const database = await PostImage.find();
    res.json(database);
  } catch (error) {
    console.log(error);
  }
});

//Listening to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
