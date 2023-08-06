import React from "react";
import CSS from "../assets/CSS.png";
import HTML from "../assets/HTML.png";
import JS from "../assets/Javascript.png";
import Tailwind from "../assets/Tailwind.png";
import iconreact from "../assets/React.png";
import Github from "../assets/Github.png"


const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f]  text-gray-300">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-yellow-500 ">
            Experience
          </p>
          <p className=" py-4">
            // These are the technologies I've worked with
          </p>
        </div>
        {/* container of icon */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8s'>
        <div className='shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5'>
            <img className=" w-20 mx-auto py-5" src={Github} alt="HTML icon" />
            <p>GITHUB</p>
          </div>
          <div className='shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5'>
            <img className=" w-20 mx-auto py-5" src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5'>
            <img className=" w-20 mx-auto py-5" src={CSS} alt="HTML icon" />
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5'>
            <img className=" w-20 mx-auto py-5" src={Tailwind} alt="HTML icon" />
            <p>Tailwind</p>
          </div>
          <div className='shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5'>
            <img className=" w-20 mx-auto py-5" src={JS} alt="HTML icon" />
            <p>Javascript</p>
          </div>
          <div className='shadow-md shadow-gray-600 rounded-full hover:scale-110 duration-500 py-5'>
            <img className=" w-20 mx-auto py-5" src={iconreact} alt="HTML icon" />
            <p>REACT</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
