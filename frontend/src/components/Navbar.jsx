import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
    {/* Top Bar */}
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className=" w-8 p-2 bg-black rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className=" w-8 p-2 bg-black rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className=" flex items-center gap-4">
            <p className=" bg-white text-black rounded-2xl px-4 py-1 text-lg hidden md:block cursor-pointer">Explore Premium</p>
            <p className=" bg-black text-white rounded-2xl px-4 py-1 text-lg hidden md:block cursor-pointer">Install App</p>
            <p className=" bg-hightlight text-black w-7 h-7 rounded-full flex items-center justify-center">M</p>
        </div>
      </div>
      {/* Lower Section Button */}
      <div className="flex items-center gap-3 mt-4">
        <p className=" bg-white text-black px-4 py-1 cursor-pointer font-bold rounded-full">All</p>
        <p className=" bg-black text-white px-4 py-1 cursor-pointer font-semibold rounded-full">Music</p>
      </div>
    </>
  );
};

export default Navbar;
