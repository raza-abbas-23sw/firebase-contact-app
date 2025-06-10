import React from "react";
import logo from "../assets/logos_firebase.svg";
const Header = () => {
  return (
    <>
      <div className="bg-white rounded w-full flex items-center justify-center gap-3 py-3">
        <img src={logo} alt="" />
        <h1 className="text-xl sm:text-2xl"> firebase Contact App</h1>
      </div>
    </>
  );
};

export default Header;
