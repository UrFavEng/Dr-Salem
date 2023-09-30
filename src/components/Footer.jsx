import React, { useEffect } from "react";
import logo from "../assest/logo.png";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-[#0b2c2d] py-[80px] overflow-x-hidden">
      <div className="containerr flex flex-wrap flex-col sm:flex-row justify-between  items-center sm:items-start gap-y-[40px] sm:gap-y-[50px] lg:gap-0">
        <div
          data-aos="fade-right"
          className="sm:w-[100%] lg:w-[280px] xl:w-[330px] flex items-center sm:justify-center"
        >
          <img src={logo} alt="logo" className="w-[100px]" />
          <h1 className="text-[#ccc] text-[28px] font-semibold flex flex-col ">
            Salem Elzeny{" "}
            <span className="text-[13px] font-medium pl-[3px] mt-[-5px] text-[#b7b7b7]">
              Physiotherapist
            </span>
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className=" sm:w-[280px] xl:w-[330px] flex flex-col justify-center items-center"
        >
          <h1 className="text-[18px] text-[#ccc] font-semibold mb-[15px] ">
            Quick Links
          </h1>
          <ul className="text-[17px] font-medium text-[#b7b7b7] flex flex-col gap-2">
            <li className=" hover:text-white">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-white">
              <a href="#about">About Us</a>
            </li>
            <li className=" hover:text-white">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-left"
          className="sm:w-[280px] xl:w-[330px]  flex flex-col justify-center items-center"
        >
          <h1 className="text-[18px] text-[#ccc] font-semibold mb-[15px] ">
            Contact Us
          </h1>
          <ul className="text-[17px] font-medium text-[#b7b7b7]  flex flex-col gap-2">
            <li className=" hover:text-white">
              <a
                href="https://wa.me/201022491167"
                className="flex items-center gap-2"
              >
                <AiOutlineWhatsApp className="text-[20px]" /> WhatsApp
              </a>
            </li>
            <li className=" hover:text-white">
              <a href="tel:01022491167" className="flex items-center gap-2">
                <BsPhoneFill className="text-[20px] " /> Phone
              </a>
            </li>
            <li className=" hover:text-white">
              <a
                href="mailto:salem.mamduh@gmail.com"
                className="flex items-center gap-2"
              >
                <BiLogoGmail className="text-[20px]" /> Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
