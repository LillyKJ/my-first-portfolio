import React from "react";
import CSSImage from "../assets/Cimg.png";
import HTML from "../assets/Himg.png";
import JS from "../assets/javascript.png";
import Tailwind from "../assets/tw.png";
import iconreact from "../assets/react.png";
import Github from "../assets/github.png";
import mongoDB from "../assets/mongoDB.png";
import nodeJS from "../assets/nodeJS.png";

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-full bg-[#0a192f]  text-gray-300">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto p-10 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-yellow-500 ">
            Experience
          </p>
          <p className=" py-4">
            // These are the technologies I've worked with
          </p>
        </div>
        {/* container of icon */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-14">
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img className=" w-20 mx-auto py-5" src={Github} alt="HTML icon" />
            <p>GITHUB</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img className=" w-20 mx-auto py-5" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img className=" w-20 mx-auto py-5" src={CSSImage} alt="HTML icon" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img
              className=" w-20 mx-auto py-5"
              src={Tailwind}
              alt="HTML icon"
            />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img className=" w-20 mx-auto py-5" src={JS} alt="HTML icon" />
            <p>Javascript</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img
              className=" w-20 mx-auto py-5"
              src={iconreact}
              alt="HTML icon"
            />
            <p>REACT</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img
              className=" w-20 mx-auto py-5"
              src="https://cdn.thenewstack.io/media/2021/12/d9fd0fdd-screen-shot-2021-12-20-at-11.47.03-am.png"
              alt="HTML icon"
            />
            <p>Supabase</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img className=" w-20 mx-auto py-5" src={mongoDB} alt="HTML icon" />
            <p>mongoDB</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5">
            <img className=" w-20 mx-auto py-5" src={nodeJS} alt="HTML icon" />
            <p>nodeJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
