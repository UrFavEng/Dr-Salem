import React, { useEffect } from "react";
import salem from "../assest/salem.png";
import { FaUserDoctor } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div
      id="home"
      className=" flex flex-col md:flex-row-reverse  justify-between items-center  lg:items-end py-[30px] md:py-[60px] xl:py-[70px] md:gap-2 lg:gap-8 mt-[40px]"
    >
      <div className=" relative md:w-[65%] lg:flex-[8] xl:flex-[8]">
        <div className="  absolute overflow-hidden sm:h-[330px] md:h-[320px] lg:h-[330px] xl:h-[380px] z-[-1] sm:w-[330px] md:w-[320px] lg:w-[330px] xl:w-[380px] rounded-full bg-[#005659be] top-[55%] left-[50%] md:left-[58%] lg:left-[64%] xl:left-[62%] translate-y-[-50%] translate-x-[-50%]">
          <div className="  absolute h-[300px] z-[-1] w-[300px] rounded-full bg-[#00565995] top-[10%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></div>
        </div>
        <img
          data-aos="fade-left"
          src={salem}
          alt=""
          className=" w-[420px] md:w-[461px] md:ml-[20px] lg:ml-[55px] xl:ml-[80px] textShadowImage"
        />
      </div>
      <div className="pt-[20px] md:py-[0px] md:w-[50%] lg:w-auto lg:flex-[10] xl:flex-[10] flex flex-row-reverse  lg:justify-end  md:gap-3 lg:gap-8 mb-[25px]">
        <div className="lg:flex lg:flex-col lg:justify-center xl:block">
          <h1
            data-aos="fade-right"
            className=" text-[41px] md:text-[35px] md:mt-[15px] lg:mt-[0px] lg:text-[60px] xl:text-[78px] font-bold md:tracking-[1px] lg:tracking-[3px] text-[#035356]"
          >
            Salem Elzeny
          </h1>
          <h4
            data-aos="fade-right"
            className=" text-[22px] md:text-[22px]   lg:text-[28px] capitalize text-[#545454] pl-[8px] md:pl-[8px] font-medium tracking-[1px] sm:mt-[-10px] md:mt-[-8px] lg:mt-[-12px]  xl:mt-[-25px] textShadowSec flex flex-row items-center gap-2"
          >
            Physiotherapist{" "}
            <FaUserDoctor className="text-[#3d7d80] text-[22px]" />
          </h4>
          <p
            data-aos="fade-right"
            className="pl-[8px] md:pl-[8px]  md:leading-[20px]  mt-[15px]  md:mt-[8px] lg:leading-[25px]  text-[#6e6e6e] md:text-[14px] lg:text-[16px] font-medium lg:mt-[25px] tracking-[0.75px]"
          >
            Welcome to the official website of Dr. Salem, your trusted partner
            on the path to better health and well-being through the art of
            physical therapy. Discover personalized care and innovative
            solutions to enhance your life.
          </p>
        </div>
        <div className="hidden md:flex flex-col justify-center  items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#005659be] "></div>
          <div className="w-1 sm:h-64   md:h-60 lg::h-80 h-40 linerColor"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
