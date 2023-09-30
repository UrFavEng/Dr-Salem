import React, { useState } from "react";
import logo from "../assest/logo.png";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [Show, SetShow] = useState(false);
  return (
    <div className="bg-white boxshadowNav  fixed w-[100%] top-0 z-10">
      <div className="containerr flex justify-between items-center">
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-[80px]" />
          </a>
        </div>
        <div className="">
          <ul className=" gap-4 items-center hidden sm:flex">
            <li>
              <a
                href="#home"
                className="text-[18px] font-semibold hover:text-[#1a6669] text-[#7b7b7b]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="text-[18px] font-semibold hover:text-[#1a6669] text-[#7b7b7b]"
              >
                About Us{" "}
              </a>
            </li>
          </ul>
          <FaBars
            className="text-[#3d7d80] text-[33px] block sm:hidden"
            onClick={() => {
              SetShow(!Show);
            }}
          />
          {Show && (
            <div className=" absolute top-[80px] right-[10px] bg-[#005659a1]   w-[180px] flex justify-center items-center sm:hidden">
              <ul className=" w-[100%] text-center">
                <li className=" border-b border-[#777]  py-[5px] hover:bg-[#3d7d80] hover:text-[#e4e4e4] text-[#c7c7c7]">
                  <a
                    href="#home"
                    className="text-[20px] font-semibold "
                    onClick={() => {
                      SetShow(!Show);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className=" border-b border-[#777]  py-[5px] hover:bg-[#3d7d80] hover:text-[#e4e4e4] text-[#c7c7c7]">
                  <a
                    href="#about"
                    className="text-[20px] font-semibold "
                    onClick={() => {
                      SetShow(!Show);
                    }}
                  >
                    About
                  </a>
                </li>
                <li className=" border-b border-[#777]  py-[5px] hover:bg-[#3d7d80] hover:text-[#e4e4e4] text-[#c7c7c7]">
                  <a
                    href="#contact"
                    className="text-[20px] font-semibold "
                    onClick={() => {
                      SetShow(!Show);
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className=" hidden sm:block">
          <a
            href="#contact"
            className="bg-[#005659] py-1 px-[50px] text-[22px] font-bold text-[#bdbdbd] rounded-xl hover:text-[#e3e3e3] hover:bg-[#286d6d]"
          >
            Contact Us{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
