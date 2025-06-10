import React from "react";
import contactIcon from "../assets/Hands Contact.png";
const NotFound = () => {
  return (
    <>
      <div className="flex items-center w-full h-[80vh] justify-center gap-3  ">
        <img src={contactIcon} alt="" />
        <h1 className="text-2xl text-white">No Contact Found</h1>
      </div>
    </>
  );
};

export default NotFound;
