import React from "react";
import { Form, Link, NavLink, redirect, useNavigation } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import { fileUploaderIcon } from "../assets/icons";
import { sendImage } from "../api";
import { back } from "../assets/icons";
import { ThreeDots } from "react-loader-spinner";

var data = {};
var mediaType;

export async function submitAction() {
  try {
    sendImage(data);
    return data;
  } catch (error) {
    console.log(error);
  }

  return data;
}

function Try() {
  const [imgUrl, setimgUrl] = useState("");

  const navigation = useNavigation();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      data.imgType = file.type;
      mediaType = file.type.split("/")[0];
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setimgUrl(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  useEffect(() => {
    data.imgURL = imgUrl;
  }, [imgUrl]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {navigation?.state == "loading" ? (
        <div className="flex items-center justify-center mt-20">
          <ThreeDots color="#000" height={100} width={100} />
        </div>
      ) : (
        <div className="flex flex-col items-center w-[100%]">
          <button className="flex w-[50%] pl-4 mt-2">
            <Link to={"/"}>
              <img className="self-start w-10 h-10" src={back} alt="" />
            </Link>
          </button>
          <h1 className="text-3xl text-center">Select A File</h1>
          <div>
            <Form method="post">
              <div
                className="flex flex-col justify-center items-center text-center h-[612px] border-none rounded-xl focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none ring-offset-[#7878A3] !important bg-[#101012] p-8 w-[600px]"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : imgUrl ? (
                  mediaType == "image" ? (
                    <div className="w-full h-[510px]">
                      <img
                        className="w-full h-full object-cover rounded-md"
                        src={imgUrl}
                        alt="uploaded-photo"
                      />
                      <hr className="mt-4"></hr>
                      <button className="text-white" type="button">
                        Click or drag photo to replace
                      </button>
                    </div>
                  ) : mediaType == "video" ? (
                    <div className="w-full h-[510px]">
                      <video className="w-full h-full object-cover rounded-md">
                        <source src={imgUrl} />
                      </video>
                    </div>
                  ) : null
                ) : (
                  <div className="flex flex-col">
                    <img src={fileUploaderIcon} alt="" />
                    <p className="text-white">Drap photo here</p>
                    <p className="text-white">SVG, PNG, JPG</p>
                    <button
                      type="button"
                      className="rounded-lg p-2 text-white  bg-[#222273]"
                    >
                      Select from Computer
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  className="bg-[#101012] text-white rounded-lg py-2 px-4"
                  type="button"
                >
                  <Link to={"/"}>Cancel</Link>
                </button>

                <button
                  type="submit"
                  className="bg-[#877EFF] rounded-lg py-2 px-3"
                >
                  Upload Photo
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Try;
