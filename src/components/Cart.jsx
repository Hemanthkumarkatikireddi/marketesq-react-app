// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Cart = () => {
  const location = useLocation();
  const userData = location.state?.user;
  console.log(userData);
  const children =
    userData.children === "0" || userData.children === ""
      ? ""
      : userData.children + " Children";
  return (
    <div className="h-screen">
      <Header />
      <div className="">
        <div className="relative mb-20 mt-10">
          <div className="ml-9 mr-9 md:span ">
            <div className="bg-gray-200 justify-between items-top grid grid-cols-2 p-5 pb-20 items-center">
              <div className="border-r-gray-400 p-2  border-r-2 col-span-1">
                <h1 className="font-semibold md:text-4xl mb-1">
                  {userData.name}
                </h1>
                <p className="font-semibold">{userData.phno}</p>
                <p className="font-semibold">{userData.gmail}</p>
                <div className="flex">
                  <p className="font-semibold mr-2">{userData.adults} Adults</p>
                  <p className="font-semibold ">{children} </p>
                </div>
              </div>
              <div className="flex items-center p-2 col-span-1">
                <IoCheckmarkCircleSharp className="size-[150px] text-green-600" />
                <div className="ml-2">
                  <h1 className="font-semibold md:text-4xl mb-4">
                    Order Completed
                  </h1>
                  <p className="font-semibold">have questions ?</p>
                  <Link to="/">
                    <p className="font-semibold text-blue-700 cursor-pointer">
                      contact us
                    </p>
                  </Link>
                </div>
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
                  <div className="text-xs md:text-sm lg:text-base font-bold">
                    {userData.rooms}
                  </div>
                </div>
              </div>
            </div>
            <div className="place-items-center flex-col text-center p-3 col-span-1">
              <Link to="/bookingpage">
                <div className="text-xs md:text-lg lg:text-base btn flex justify-center text-gray-200 font-bold items-center p-2 rounded-md border-none  md:w-[150px] text-center ">
                  ₹ {userData.cost}
                </div>
              </Link>
              <div className="p-3"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
