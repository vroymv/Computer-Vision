import React from "react";
import { project, team } from "../../assets/images";
import AboutCard from "./aboutCard";
import { back } from "../../assets/icons";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col w-[80%] mx-auto mt-20 p-10">
      <button className="flex w-[50%] pl-4 mt-2">
          <Link to={'/'}>
            <img className="self-start w-10 h-10" src={back} alt="" />
          </Link>
        </button>
      <h1 className="text-center text-3xl">About</h1>
      <div>
        <div className="flex gap-2">
          <div className="w-[45%]">
            <h1 className="text-4xl w-20 mx-auto">Project</h1>
            <AboutCard imgSrc={project} />
          </div>
          <p className="flex flex-1 justify-center items-center p-6">
            Computer vision, leveraging the capabilities of devices like the
            ESP32-CAM, opens a realm of possibilities for recognition and
            understanding of visual data. With facial recognition, the system
            can identify and authenticate individuals based on unique facial
            features, enhancing security and personalized experiences. Object
            detection allows for the identification and tracking of various
            objects within an image or video stream, enabling applications like
            surveillance, inventory management, and autonomous navigation.
            Furthermore, logo detection enables businesses to monitor brand
            presence and analyze marketing efforts by identifying logos within
            images or videos. By harnessing the power of computer vision, the
            ESP32-CAM empowers developers to create innovative solutions across
            a wide range of domains, from security and surveillance to retail
            and marketing.
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <p className="flex flex-1 justify-center items-center p-6">
          We are a team of four dedicated computer students who have poured our
          hard work and passion into developing a groundbreaking project called
          "Computer Vision." Through tireless effort and dedication, we've
          harnessed the power of advanced technologies to create a system
          capable of interpreting visual information with precision and
          efficiency. Our project represents the culmination of our collective
          skills and determination, showcasing the transformative potential of
          innovation in the field of computer.
        </p>

        <div className="w-[45%]">
          <h1 className="text-4xl w-20 mx-auto">Team</h1>
          <AboutCard imgSrc={team} />
        </div>
      </div>
    </div>
  );
}

export default About;
