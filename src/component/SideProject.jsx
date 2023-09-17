import React from "react";
import project from "../assets/project.png";

const SideProject = () => {
  return (
    <div name="sideproject" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500">
            Side Project
          </p>
          <p className="py-6">//Check out my side projects</p>
          <div className=" w-[80%] h-full">
            <div
              style={{
                backgroundImage: `url('${project}')`,
                backgroundSize: "cover", // You can adjust this property
                backgroundPosition: "center center",
                opacity: 0.8,
              }}
              className=" h-full rounded-2xl shadow-lg shadow-[#040c16] group container  flex justify-center text-center items-center mx-auto"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Project-Space
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/LillyKorakot/project-space"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                  <a href="https://project-space-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProject;
