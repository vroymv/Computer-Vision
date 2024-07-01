const mongoose = require("mongoose");

main().catch((err) => console.log(err));

//Mongoose DB connection
async function main() {
  await mongoose.connect(
    `mongodb+srv://mbongvanistelroy:${process.env.MONGO_PWD}@cluster0.mkny6vj.mongodb.net/Computer-Vision`
  );
}

const rekogSchema = new mongoose.Schema({
  labels: Object,
  rekogImage: String,
  time: Date,
  text: String,
  customLabel: Array,
  customLabelConfidence: String,
  labelConfidence: String,
  facialAnalysis: {
    Age: String,
    Beard: Boolean,
    Emotions: Array,
    EyeGlasses: Boolean,
    EyesOpen: Boolean,
    Gender: String,
    MouthOpen: Boolean,
    Mustache: Boolean,
    Sunglasses: Boolean,
    Smile: Boolean
  },
  audio: String
});

const PostImage = new mongoose.model("Post", rekogSchema);

module.exports = { main, PostImage };
