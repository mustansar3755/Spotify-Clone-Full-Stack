import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";

const Display = () => {
  return (
    <div className=" w-full lg:w-[75%] lg:ml-0 overflow-auto text-white m-2 px-6 pt-4 rounded bg-secondary">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
      </Routes>
    </div>
  );
};

export default Display;
