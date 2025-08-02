import React from "react";
import { assets } from "../assets/assets.js";

const NavBar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white cursor-pointer rounded-full px-5 py-2 sm:py-2 sm:px-7 text-xs sm:text-sm"
      >
        LogOut
      </button>
    </div>
  );
};

export default NavBar;
