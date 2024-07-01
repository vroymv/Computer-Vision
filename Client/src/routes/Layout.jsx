import React from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import { visionPro } from "../assets/images";
import { ThreeDots } from "react-loader-spinner";

function Layout() {
  const navigation = useNavigation();
  return (
    <div>
      {navigation?.state == "loading" ? (
        <div  className="flex items-center justify-center mt-20">
          <ThreeDots color="#000" height={100} width={100} />
        </div>
      ) : (
        <div className="mt-20">
          <div className=" flex flex-col gap-3 items-center border-2 rounded-lg w-[60%] mx-auto py-20">
            <img src={visionPro} alt="" />
            <h1 className="text-4xl">Computer Vision</h1>
            <div className="flex gap-4">
                <NavLink className=" text-2xl border-2 hover:bg-sky-500 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 rounded-lg py-2 px-3" to={"/try"}>Try</NavLink>
              <button className="border-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg py-2 px-3">
                <NavLink
                  to={"/database"}
                  className="text-2xl"
                >
                  Database
                </NavLink>
              </button>
            </div>
              <Link to={"/about"} className="text-2xl border-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg py-2 px-3">About</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
