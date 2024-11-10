// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pt-4 pb-4 mb-2 flex items-center ml-9 mr-9 justify-between">
      <div>
        <Link to="/">
          <h1 className="font-bold cursor-pointer">Brisphere</h1>
        </Link>
      </div>
      <nav>
        <div className="p-2 flex list-none justify-between text-gray-600 font-semibold">
          <Link to="/#discover">
            <li className="pl-4 cursor-pointer">Discover</li>
          </Link>
          <Link to="/#services">
            <li className="pl-4 cursor-pointer">Services</li>
          </Link>
          <Link to="/#footer">
            <li className="pl-4 cursor-pointer">About Us</li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
