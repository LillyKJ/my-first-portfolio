import React from "react";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-yellow-500 text-xl">Hi, my name is</p>
        <h1 className=" text-white text-4xl sm:text-7xl font-bold">
          Korakot Jarunongkran
        </h1>
        <h2 className="text-gray-400 text-4xl sm:text-7xl font-bold">
          I'm a Full Stack Developer.
        </h2>
        <p className=" text-gray-400 py-4 max-w-[700px]">
          "I'm a newcomer to the field of full-stack development, eager to
          advance my career in coding. Although I have limited experience, I am
          determined to learn and grow."
        </p>
        <div>
          <button className="text-white group border-2 px-5 py-3 my-2 flex items-center hover:bg-white hover:text-black hover:border-transparent active:bg-slate-500 active:text-white active:border-transparent ">
            <Link
              to="sideproject"
              smooth={true}
              duration={500}
              onClick={() => setSelectedItem("sideproject")}
            >
              {" "}
              View Side project{" "}
            </Link>
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className=" ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
