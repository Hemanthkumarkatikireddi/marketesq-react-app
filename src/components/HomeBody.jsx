// eslint-disable-next-line no-unused-vars
import React from "react";
import ladakh from "../assets/ladakh.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import { Link } from "react-router-dom";

const HomeBody = () => {
  return (
    <div>
      <div className="relative mb-20">
        <div className="ml-9 mr-9 md:span ">
          <div className=" flex bg-gray-200 justify-between items-top ">
            <div className="col-span-1 p-10">
              <h1 className="text-2xl md:text-6xl pb-4 sm:text-5xl">
                Work from Ladakh
              </h1>
              <p className="text-sm sm:text-md md:text-lg font-semibold text-gray-700 ">
                {"India's"} first true digital tourism ecosystem
              </p>
              <div className="flex items-center mt-2">
                <FaFacebook className="md:size-[35px]  sm:size-[30px] size-[20px]" />
                <AiFillInstagram className="md:size-[45px] ml-3 sm:size-[35px] size-[25px]" />
              </div>
            </div>
            <div className="col-span-2">
              <img src={ladakh} alt="" className="h-[300px] w-auto" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 inset-x-0 bg-white justify-between ml-12 mr-12 p-3 mb-10 grid grid-cols-4 rounded-md shadow-lg">
          <div className=" text-center border-r-2 border-gray-200 rounded-md p-3 col-span-1">
            <div>
              <h2 className="text-xs lg:text-base md:tex-lg">CHECK-IN</h2>
              <h3 className="text-xs md:text-sm lg:text-base font-bold">
                01 Feb 2022
              </h3>
            </div>
          </div>
          <div className="border-r-2 border-gray-200 rounded-md p-3 col-span-1 text-center">
            <div>
              <h2 className="text-sm lg:text-base  md:tex-lg">CHECK-OUT</h2>
              <h3 className="text-xs md:text-sm lg:text-base font-bold">
                07 Feb 2022
              </h3>
            </div>
          </div>
          <div className="justify-center flex-col text-center items-center p-3 col-span-1">
            <div>
              <h2 className="text-sm lg:text-base md:tex-lg">ROOMS</h2>
              <div className="flex justify-center items-center ">
                <CiCircleMinus className="mr-4 size-5 hover:bg-black rounded-full hover:text-white cursor-pointer" />
                <div className="text-xs md:text-sm lg:text-base font-bold">
                  1
                </div>
                <CiCirclePlus className="ml-4 size-5 hover:bg-black rounded-full hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="justify-center flex items-center col-span-1">
            <Link to="/bookingpage">
              <div className="text-xs md:text-lg lg:text-base btn flex justify-center text-gray-200 font-semibold items-center p-2 rounded-md border-none  md:w-[150px] text-center ">
                Book
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
