// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BookingPage = () => {
  const [user, setUser] = useState({
    id: "123",
    name: "",
    gmail: "",
    phno: "",
    adults: "",
    children: "",
    rooms: 1,
    cost: 12430,
  });
  const [page, setPage] = useState("/bookingpage");

  const UpdateUser = (field, value) => {
    if (field === "phno") {
      value = value.startsWith("+91") ? value : `+91 ${value}`;
    }
    setUser((preUser) => ({
      ...preUser,
      [field]: value,
    }));
  };

  const RoomBook = (increase) => {
    console.log(increase);
    const amount = increase === 1 ? 12430 : -12430;
    setUser((preUser) => ({
      ...preUser,
      rooms: Math.max(1, preUser.rooms + increase),
      cost: Math.max(12430, preUser.cost + amount),
    }));
  };

  const submitBooking = (e) => {
    e.preventDefault();
    if (
      !(
        user.name === "" ||
        user.gmail === "" ||
        user.adults === "" ||
        user.gmail === "" ||
        user.phno === ""
      )
    ) {
      setPage("/cart");
    }
    console.log(page, user.name);
  };

  return (
    <div>
      <Header />
      <div className=" ">
        <div className="relative mb-24 mt-10">
          <div className="ml-9 mr-9 md:span ">
            <div className=" bg-gray-200 justify-between items-top grid grid-cols-4 p-10 pb-20 items-center">
              <div className=" mr-1 border-r-2 pb-5 col-span-2">
                <input
                  type="text"
                  // name={name}
                  value={user.name}
                  className="p-3 w-full outline-none"
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    UpdateUser("name", e.target.value);
                  }}
                  required
                />
              </div>
              <div className="ml-1  items-center  pb-5 col-span-2">
                <input
                  type="email"
                  value={user.gmail}
                  name="email"
                  className="p-3 w-full outline-none"
                  placeholder="Enter Your Mail"
                  onChange={(e) => {
                    UpdateUser("gmail", e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mr-1 flex items-center pb-5 col-span-2">
                <input
                  type="text"
                  value={user.phno}
                  min="10"
                  max="10"
                  className="p-3 w-full outline-none"
                  placeholder="Ph.no"
                  onChange={(e) => {
                    UpdateUser("phno", e.target.value);
                  }}
                />
              </div>
              <div className="ml-1 mr-1 flex items-center  pb-5 col-span-1">
                <input
                  type="number"
                  value={user.adults}
                  min="1"
                  className="p-3 w-full outline-none"
                  placeholder="Adult"
                  onChange={(e) => {
                    UpdateUser("adults", e.target.value);
                  }}
                />
              </div>
              <div className="ml-1 flex items-center pb-5 col-span-1">
                <input
                  type="number"
                  value={user.children}
                  min="0"
                  className="p-3 w-full outline-none"
                  placeholder="Children"
                  onChange={(e) => {
                    UpdateUser("children", e.target.value);
                  }}
                />
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
                  <CiCircleMinus
                    onClick={() => RoomBook(-1)}
                    className="mr-4 size-5 hover:bg-black rounded-full hover:text-white cursor-pointer"
                  />
                  <div className="text-xs md:text-sm lg:text-base font-bold">
                    {user.rooms}
                  </div>
                  <CiCirclePlus
                    onClick={() => RoomBook(1)}
                    className="ml-4 size-5 hover:bg-black rounded-full hover:text-white cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div
              className="place-items-center flex-col text-center p-3 col-span-1"
              onClick={submitBooking}
            >
              <Link to={page} state={{ user }}>
                <div className="grid grid-cols-6 text-xs md:text-lg lg:text-base btn  text-gray-200 font-semibold items-center  rounded-md border-none  md:w-[150px] text-center ">
                  <span className="col-span-5 p-2">
                    ₹ {user.rooms <= 1 ? 12430 : user.cost}
                  </span>
                  <div className="bg-cyan-950 pl-2 pr-2 border-r-md rounded-md rounded-l-none col-span-1 flex items-center justify-end">
                    <FaArrowRight className="size-[40px] text-white" />
                  </div>
                </div>
              </Link>
              <h3 className="font-bold text-gray-500 text-xs md:text-sm ">
                Click to pay token amount
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
