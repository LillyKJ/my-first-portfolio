import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "../index.css";
import { Link } from "react-scroll";
import resume from "../assets/korakot.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className=" font-bold text-center">
        <h1>Korakot Jarunongkran</h1>
        <h1>Portfolio</h1>
      </div>

      {/* menu  */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setSelectedItem("home")}
            className={selectedItem === "home" ? " border-b-4    " : {}}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setSelectedItem("about")}
            className={selectedItem === "about" ? " border-b-4  " : {}}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setSelectedItem("skills")}
            className={selectedItem === "skills" ? " border-b-4  " : {}}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            onClick={() => setSelectedItem("education")}
            className={selectedItem === "education" ? " border-b-4  " : {}}
          >
            {" "}
            Education{" "}
          </Link>
        </li>
        <li>
          <Link
            to="sideproject"
            smooth={true}
            duration={500}
            onClick={() => setSelectedItem("sideproject")}
            className={selectedItem === "sideproject" ? " border-b-4  " : {}}
          >
            {" "}
            Side project{" "}
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
        onClick={() => setSelectedItem("education", "home", "about", "skills")}
        click
        hide
        navbar
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              setSelectedItem("home");
              setNav(false);
            }}
            className={selectedItem === "home" ? " border-b-4    " : {}}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              setSelectedItem("about");
              setNav(false);
            }}
            className={selectedItem === "about" ? " border-b-4  " : {}}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => {
              setSelectedItem("skills");
              setNav(false);
            }}
            className={selectedItem === "skills" ? " border-b-4  " : {}}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="education"
            smooth={true}
            duration={500}
            onClick={() => {
              setSelectedItem("education");
              setNav(false);
            }}
            className={selectedItem === "education" ? " border-b-4  " : {}}
          >
            {" "}
            Education{" "}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="sideproject"
            smooth={true}
            duration={500}
            onClick={() => {
              setSelectedItem("sideproject");
              setNav(false);
            }}
            className={selectedItem === "sideproject" ? " border-b-4  " : {}}
          >
            {" "}
            Side project{" "}
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] bg-white hover: duration-1000 ease-in-out">
            <a
              className="flex justify-between items-center w-full text-black font-bold"
              href="https://github.com/LillyKorakot"
              target="_blank"
            >
              Github <FaGithub size={30} className=" text-black" />
            </a>
          </li>
          <li className=" w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] bg-[#4267B2] hover: duration-1000 ease-in-out">
            <a
              className="flex justify-between items-center w-full text-white font-bold"
              href="mailto:korakot.jarunongkran@gmail.com"
            >
              
              Email <HiOutlineMail size={30} className=" text-white" />
            </a>
          </li>
          <li className=" w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] bg-white hover: duration-1000 ease-in-out">
            <a
              className="flex justify-between items-center w-full text-black font-bold"
              href={resume}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} className=" text-black" />
            </a>
          </li>
          <li className=" w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-5px] bg-[#4267B2] hover: duration-1000 ease-in-out">
            <a
              className="flex justify-between items-center w-full text-white font-bold"
              href="https://www.linkedin.com/in/korakot-jarunongkran-543068288/"
              target="_blank"
            >
              Linkedin  <FaLinkedinIn size={30} className=" text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
