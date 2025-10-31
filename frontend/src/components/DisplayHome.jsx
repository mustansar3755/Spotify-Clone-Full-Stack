import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import SongsItem from "./SongsItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className=" mb-4">
        <h1 className=" font-bold my-5 text-2xl">Featured Chart's</h1>
        <div className=" flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      {/* Songs Data */}
      <div className=" mb-4">
        <h1 className=" font-bold my-5 text-2xl">Today's biggest hitsrt's</h1>
        <div className=" flex overflow-auto">
          {songsData.map((item,index)=>(
            <SongsItem key={index} name={item.name} desc={item.desc} image={item.image}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
