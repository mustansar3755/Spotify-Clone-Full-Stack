import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { seekBar, seekBg, playStatus, play, pause ,track,time} =
    useContext(PlayerContext);

  return (
    <div className=" h-[10%] bg-black flex items-center justify-between px-4  text-white">
      {/*! Left Section */}
      <div className=" hidden lg:flex items-center gap-3">
        <img className=" w-12" src={track.image} alt="" />
        <div className="">
          <p className=" font-bold">{track.name}</p>
          <p className=" text-secText font-light">
            {track.desc.slice(0, 12)}
          </p>
        </div>
      </div>
      {/* Center Player */}
      <div className="flex flex-col gap-3 items-center m-auto">
        <div className=" flex gap-2 items-center">
          <img
            className=" w-5 cursor-pointer"
            src={assets.search_icon}
            alt=""
          />
          <img className=" w-5 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus ? (
            <img
              className=" w-5 cursor-pointer"
              src={assets.pause_icon}
              alt=""
              onClick={pause}
            />
          ) : (
            <img
              onClick={play}
              className=" w-5 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img className=" w-5 cursor-pointer" src={assets.next_icon} alt="" />
          <img className=" w-5 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className=" flex items-center gap-4">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg}
            className=" max-w-[500px] w-[60vw] bg-gray-300 rounded-full"
          >
            <hr
              ref={seekBar}
              className=" w-0 border-none h-1 rounded-full bg-green-700"
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      {/* Last Right Section */}
      <div className=" hidden lg:flex items-center gap-2 opacity-75">
        <img className=" w-4 cursor-pointer" src={assets.plays_icon} alt="" />
        <img className=" w-4 cursor-pointer" src={assets.mic_icon} alt="" />
        <img className=" w-4 cursor-pointer" src={assets.queue_icon} alt="" />
        <img className=" w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
        <img className=" w-4 cursor-pointer" src={assets.volume_icon} alt="" />
        <div className=" bg-slate-50 w-20 h-1 rounded"></div>
        <img
          className=" w-4 cursor-pointer"
          src={assets.mini_player_icon}
          alt=""
        />
        <img className=" w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
