import React from "react";
import {
  beard,
  female,
  man,
  happy,
  smile,
  eyes,
  sunglasses,
} from "../assets/icons";
import { LPULogo } from "../assets/images";
import AudioPlayer from "./AudioPlayer";

function Card({ imgSrc, labels, lpuLogo, text, facialAnalysis, AudioBuffer }) {
  return (
    <div className="border-2 rounded-md m-2 w-[304px]">
      <div className="w-[300px] h-[300px]">
        <img
          className="rounded-md object-cover w-full h-full"
          src={imgSrc}
          alt="image title"
        />
      </div>
      <div className="flex flex-col border-t-2 ">
        <div className="flex">
          <div className="flex flex-col w-[50%] border-r-2 px-2 py-1">
            <h3 className="font-bold">Labels:</h3>
            <p className={"text-sm"}>{labels}</p>
          </div>
          <div className="flex flex-1 flex-col px-2 py-1 items-center">
            <h3 className="font-bold">LPU LOGO:</h3>
            <p className="text-center">
              {lpuLogo.length > 0 ? (
                <img className="w-10 h-10" src={LPULogo} alt="lpu logo" />
              ) : (
                "No Logo"
              )}
            </p>
          </div>
        </div>
        <div className="border-t-2">
          <span className="font-bold whitespace-normal">Text:</span>
          <span className="text-sm text-slate-500 whitespace-normal">
            {" "}
            {text}
          </span>
        </div>
        <div className="border-t-2">
          <span className="font-bold whitespace-normal">Facial Analysis:</span>
          <div className="flex gap-2 flex-wrap px-3">
            {facialAnalysis.Smile && (
              <div className="flex flex-col items-center">
                <img className="w-8 h-8" src={smile} alt="smile" />
                Smiling
              </div>
            )}
            {facialAnalysis.Beard && (
              <div className="flex flex-col items-center">Beard</div>
            )}
            {facialAnalysis.Emotions && (
              <div className="">{facialAnalysis.Emotions}</div>
            )}
            {facialAnalysis.EyeGlasses && (
              <div className="flex flex-col items-center">
                <img className="h-8 w-8" src={sunglasses} alt="glasses" />
                eyeGlasses
              </div>
            )}
            {facialAnalysis.EyesOpen && (
              <div className="flex flex-col items-center">
                <img className="w-8 h-8" src={eyes} alt="smile" />
                Eyes Open
              </div>
            )}
            {facialAnalysis.Gender && (
              <div className="flex flex-col">
                <img
                  className="w-8 h-8"
                  src={facialAnalysis.Gender == "Male" ? man : female}
                  alt="smile"
                />
                <div className="">{facialAnalysis.Gender}</div>
              </div>
            )}
            {facialAnalysis.MouthOpen && <div className="">mouthOpen</div>}
            {facialAnalysis.Mustache && (
              <div className="flex flex-col items-center">
                <img className="w-8 h-8" src={beard} alt="smile" />
                moustache
              </div>
            )}
            {facialAnalysis.Age != "undefined to undefined" && (
              <div className="">Age: {facialAnalysis.Age}</div>
            )}
          </div>
        </div>
        <div className="border-t-2">
          <AudioPlayer audioBuffer={AudioBuffer} />
        </div>
      </div>
    </div>
  );
}

export default Card;
