import React from "react";
import { assets } from "../assets/assets";
import {useNavigate} from 'react-router-dom'
const SidebarCard = ({ title, desc, btnText }) => {
  return (
    <div className="p-4 bg-[#242424] m-2 rounded flex flex-col items-start justify-start gap-2 font-semibold pl-4">
      <h1>{title}</h1>
      <p className=" font-light">{desc}</p>
      <button className=" px-4 py-1.5 bg-white text-lg rounded-full text-black mt-4 cursor-pointer">
        {btnText}
      </button>
    </div>
  );
};
const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className=" w-[25%] h-full hidden lg:flex flex-col gap-2 text-white">
      <div className="bg-secondary h-[15%] rounded flex flex-col justify-around">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className=" w-10" src={assets.home_icon} alt="" />
          <p className=" font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className=" w-10" src={assets.search_icon} alt="" />
          <p className=" font-bold">Search</p>
        </div>
      </div>
      {/* Lower Section */}
      <div className=" h-[85%] rounded bg-secondary">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className=" w-8" src={assets.stack_icon} alt="" />
            <p>Your Library</p>
          </div>
          <div className=" flex items-center gap-3">
            <img className=" w-5" src={assets.arrow_icon} alt="" />
            <img className=" w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        {/* Sidebar Card */}
        <SidebarCard
          title="Create your first playlist"
          desc="it's easy we'll help you"
          btnText="Create Playlist"
        />
        <SidebarCard
          title="Let's find some podcasts to follow"
          desc="We'll keep you update on new episode"
          btnText="Browse podcast"
        />
      </div>
    </div>
  );
};

export default Sidebar;
