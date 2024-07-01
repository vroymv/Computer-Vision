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
7. 🚀 [More](#more)

## 🚨 About

This repository contains server and client side code for the computer vision project. Arduino hardware code is not included.

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

👉 **Database View**: A page that shows all the images uploaded and analysed

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/image4.png?alt=media&token=93e748ff-d4c0-4767-b232-2e93092ce488" alt="Project Banner">

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
git clone https://github.com/adrianhajdin/aora.git
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

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

</details>

<details>
<summary><code>Font Loaded</code></summary>

```javascript
const [fontsLoaded, error] = useFonts({
  "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
});

useEffect(() => {
  if (error) throw error;

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded, error]);

if (!fontsLoaded && !error) {
  return null;
}
```

</details>

<details>
<summary><code>Dummy Videos for Appwrite</code></summary>

```javascript
const videos = [
  {
    title: "Get inspired to code",
    thumbnail: "https://i.ibb.co/tJBcX20/Appwrite-video.png",
    video: "https://player.vimeo.com/video/949579770?h=897cd5e781",
    prompt:
      "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
  },
  {
    title: "How AI Shapes Coding Future",
    thumbnail: "https://i.ibb.co/Xkgk7DY/Video.png",
    video: "https://player.vimeo.com/video/949581999?h=4672125b31",
    prompt: "Picture the future of coding with AI. Show AR VR",
  },
  {
    title: "Dalmatian's journey through Italy",
    thumbnail: "https://i.ibb.co/CBYzyKh/Video-1.png",
    video: "https://player.vimeo.com/video/949582778?h=d60220d68d",
    prompt:
      "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
  },
  {
    title: "Meet small AI friends",
    thumbnail: "https://i.ibb.co/7XqVPVT/Photo-1677756119517.png",
    video: "https://player.vimeo.com/video/949616422?h=d60220d68d",
    prompt:
      "Make a video about a small blue AI robot blinking its eyes and looking at the screen",
  },
  {
    title: "Find inspiration in Every Line",
    thumbnail: "https://i.ibb.co/mGfCYJY/Video-2.png",
    video: "https://player.vimeo.com/video/949617485?h=d60220d68d",
    prompt:
      "A buy working on his laptop that sparks excitement for coding, emphasizing the endless possibilities and personal growth it offers",
  },
  {
    title: "Japan's Blossoming temple",
    thumbnail: "https://i.ibb.co/3Y2Nk7q/Bucket-215.png",
    video: "https://player.vimeo.com/video/949618057?h=d60220d68d",
    prompt: "Create a captivating video journey through Japan's Sakura Temple",
  },
  {
    title: "A Glimpse into Tomorrow's VR World",
    thumbnail: "https://i.ibb.co/C5wXXf9/Video-3.png",
    video: "https://player.vimeo.com/video/949620017?h=d60220d68d",
    prompt: "An imaginative video envisioning the future of Virtual Reality",
  },
  {
    title: "A World where Ideas Grow Big",
    thumbnail: "https://i.ibb.co/DzXRfyr/Bucket-59038.png",
    video: "https://player.vimeo.com/video/949620200?h=d60220d68d",
    prompt:
      "Make a fun video about hackers and all the cool stuff they do with computers",
  },
];
```

</details>

## <a name="links">🔗 Links</a>

Assets and constants used in the project can be found [here](https://drive.google.com/drive/folders/1pckq7VAoqZlmsEfYaSsDltmQSESKm8h7?usp=sharing)

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14 Pro Course**

#
