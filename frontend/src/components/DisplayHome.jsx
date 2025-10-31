import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";

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
            //   id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      {/* Songs Data */}
      <div className=" mb-4">
        <h1 className=" font-bold my-5 text-2xl">Today's biggest hitsrt's</h1>
        <div className=" flex overflow-auto">
          {}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
