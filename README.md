<!-- Banner Image, Landing Page Of Computer Vision Site -->
<div align="center">
  <br />
    <a href="">
      <img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/ComputerVision.png?alt=media&token=5a2e27c6-8a9f-45af-b4f3-973a932de26c" alt="Project Banner">
    
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/node-js?style=for-the-badge&logo=nodedotjs&logoColor=white&label=Node%20JS" alt="Node JS" />
    <img src="https://img.shields.io/badge/Tailwind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
    <img src="https://img.shields.io/badge/awsamplify-purple?style=for-the-badge&logo=awsamplify&logoColor=white&color=%23FF9900" alt="AWSAmplify" />
    <img src="https://img.shields.io/badge/aws-purple?style=for-the-badge&logo=amazonwebservices&logoColor=white&color=%23232F3E" alt="AWSAmplify" />
    <img src="https://img.shields.io/badge/HEROKU-purple?style=for-the-badge&logo=heroku&logoColor=white&color=%23430098" alt="Heroku" />
    <img src="https://img.shields.io/badge/mongodb-purple?style=for-the-badge&logo=mongodb&logoColor=white&color=%2347A248" alt="Mongo DB" />
    
    
  </div>

  <h1 align="center">Computer Vision</h1>

   <div align="center">
     <h4>An IOT project that makes use of ESP32-CAM, TFT display. A computer with eyes that can see and identify objects using AWS Rekognition</h4>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. ⚙️ [Hardware Output](#hardwareoutput)

## 🚨 About

This repository contains server and client side code for the computer vision project. Arduino hardware code is found in the ArduinoCode.txt file.

## <a name="introduction">🤖 Introduction</a>

The front End or client side can be found in the directory client. While the Back End or server side code can be found in the directory server.

The server handles request from both the micro controller and the front end client side.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React - for the front end
- AWS Rekognition - for image processing
- Nodoe JS - for the server
- Heroku - to host the server
- AWS Amplify - to host the client side
- Mongo DB - as the database
- ESP32-CAM - for the micro controller

## <a name="features">🔋 Features</a>

<h3>Software</h3>

👉 **Onboarding Screen**: Engaging graphics and clear instructions welcome users to the app.

👉 **A Web Interface To Try Image Analysis**: A web interface that let's users try out the image analysis capabilites

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/try.png?alt=media&token=baa55660-467c-4a55-a2e5-f87b2cfeec69" alt="Try page">

👉 **Database View**: A page that shows all the images uploaded and analysed

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/image4.png?alt=media&token=93e748ff-d4c0-4767-b232-2e93092ce488" alt="Database">

<h3>Hardware</h3>

👉 **ESP32 - CAM**: Microcontroller that has OV2640 2-megapixel camera, providing capabilities for Wi-Fi and Bluetooth connectivity. It supports image capturing and video streaming allowing users to take images and have the system analyse these images.

👉 **TFT Display**: It displays images and image analysis

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vroymv/Computer-Vision.git
cd aora
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
cd Client
```

```bash
npm run dev
```

Open a new terminal

```bash
cd Server
```

```bash
nodemon app.js
```

**Setup Tailwind**

Folloow these instructions to set up tailwindcss(https://tailwindcss.com/docs/guides/vite)

**Setup AWS**

Create AWS account <br>
Create an AWS rekognition custom label model<br>

## <a name="snippets">🕸️ Snippets</a>

**Modify the following In your Code**

<details>
<summary><code>Server/app.js</code></summary>

```javascript
const client = new RekognitionClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
```

</details>

<details>
<summary><code>Server/app.js</code></summary>

```javascript
//Configuring  PollyClient
const pollyClient = new PollyClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
```

</details>

<details>
<summary><code>ProjectVersionArn from Trained AWS Rekognition Model</code></summary>

```javascript
//Custom Labels Input
const customLabelsInput = {
  Image: {
    Bytes: Buffer.from(imageData, "base64"),
  },
  MaxResults: 100,
  ProjectVersionArn:
    "arn:aws:rekognition:us-east-1:339712911556:project/Computer-vision/version/Computer-vision.2024-05-03T01.13.45/1714679026972",
};
```

</details>

## <a name="links">🔗 Links</a>

Project Report can be found here(https://docs.google.com/document/d/1Hk_jP9xNo4rFc2SJXEM7LRzSfWKg_CJxbDyMiPxdj7I/edit?usp=sharing)

## <a name="more">🚀 More</a>

**Setting Up Arduino**
Visit the project report above to get the project flow charts, data flow diagram and circuitry.

Copy and paste the arduino code. Note that the esp32 board can only make requests to a live hosted server.

Make sure to install all the used arduino libraries

## <a name="hardwareoutput">⚙️ Hardware Output</a>

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/output1.jpg?alt=media&token=d5dabd76-d357-43e5-884f-2a963a73a49d" alt="Output">
<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/output2.jpg?alt=media&token=9ae58a67-a9c4-491a-a7a2-0bf1b39ab2d6" alt="Output">
<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/output3.jpg?alt=media&token=8b2b6b5e-67ee-4f5e-bb75-66fa184fde62" alt="Output">
#
