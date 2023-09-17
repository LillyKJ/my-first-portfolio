import React from "react";
import techup from "../assets/techup.png";
import kmitl from "../assets/kmitl.png";
import unilever from "../assets/Unilever.jpg";
import factoryClassroom from "../assets/fc.png";

const Education = () => {
  return (
    <div name="education" className=" w-full h-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        {/* Title */}
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500">
            Education & Internship
          </p>
          <p className="py-6 ">
            // Check out my Education and Internship experience
          </p>
          <div className=" py-10">
            <div className=" text-center py-5 bg-white text-gray-800 font-black text-2xl rounded-t-xl">
              {" "}
              EDUCATION
            </div>
            <div className=" flex  justify-center gap-10 px-10 bg-white bg-opacity-10 py-5 rounded-b-lg">
              <div className=" bg-white w-1 flex flex-col justify-between md:hidden">
                <div className=" bg-white w-5 h-2"></div>
                <div className=" bg-white w-5 h-2"></div>
              </div>
              <div className=" flex flex-col gap-10 md:flex-row">
                <div className=" flex flex-col justify-center px-2 h-full w-[300px]">
                  <div className=" uppercase bg-gray-100 p-2 text-gray-800 font-bold rounded-t-lg text-center">
                    Coding bootcamp
                  </div>
                  <img
                    src={techup}
                    alt="techup-banner"
                    className=" w-[300px] h-[150px] "
                  />

                  <div className=" h-[70%] flex flex-col justify-center p-2  text-gray-800 leading-10 text-center rounded-b-lg bg-gray-100 ">
                    <h3>Full-Stack Software Developer</h3>

                    <h3 className=" text-sm bg-gray-400 p-2 ">
                      June-October 2023
                    </h3>
                  </div>
                </div>
                <div className=" flex flex-col justify-center px-2 h-full w-[300px]">
                  <div className=" uppercase p-2 bg-gray-100 text-gray-800 font-black rounded-t-lg text-center">
                    Bachelor degree
                  </div>
                  <img
                    src={kmitl}
                    alt="techup-banner"
                    className=" w-[300px] h-[150px] bg-white "
                  />

                  <div className=" h-[70%]  p-2 leading-8 text-center rounded-b-lg  bg-gray-100 text-gray-800 ">
                    <h3>Bachelor of Science</h3>
                    <h3>
                      Fermentation Technology in Food Industry (Second Class
                      Honors)
                    </h3>
                    <h3>King Mongkut's Institute of Technology Ladkrabang</h3>

                    <h3 className=" text-sm bg-gray-400 p-2">
                      August 2019 - May 2023
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" uppercase text-center py-5 bg-white text-gray-800 font-black text-2xl rounded-t-xl">
            {" "}
            Internship
          </div>
          <div className=" flex  justify-center gap-10 px-10 bg-white bg-opacity-10 py-5 rounded-b-lg">
            <div className=" bg-white w-1 flex flex-col justify-between md:hidden">
              <div className=" bg-white w-5 h-2"></div>
              <div className=" bg-white w-5 h-2"></div>
            </div>
            <div className=" flex flex-col gap-10 md:flex-row">

              <div className=" flex flex-col justify-center px-2 h-full w-[300px]">
                <div className=" uppercase bg-gray-100 p-2 text-gray-800 font-bold rounded-t-lg text-center">
                  Internship
                </div>
                <img src={unilever} alt="techup-banner" className=" " />

                <div className=" h-[70%] flex flex-col justify-center p-2  text-gray-800 leading-10 text-center rounded-b-lg bg-gray-100 ">
                  <h3>Data Analytic</h3>
                  <p className=" text-sm">
                    UNILEVER THAI HOLDINGS LTD. (FACTORY) | Lardkrabang
                    Industrial Estate
                  </p>

                  <h3 className=" text-sm bg-gray-400 p-2 ">
                    June - July 2022
                  </h3>
                </div>
              </div>
              
              <div className=" flex flex-col justify-center px-2 h-full w-[300px]">
                <div className=" uppercase p-2 bg-gray-100 text-gray-800 font-black rounded-t-lg text-center">
                  Internship
                </div>
                <img src={factoryClassroom} alt="techup-banner" className=" " />

                <div className=" h-[70%]  p-2 leading-8 text-center rounded-b-lg  bg-gray-100 text-gray-800 ">
                  <h3>Research Assistant</h3>

                  <h3 className=" text-sm bg-gray-400 p-2">
                    January - April 2023
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
