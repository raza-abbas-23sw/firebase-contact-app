import React from "react";
import searchIcon from "../assets/searchIcon.png";
import addIcon from "../assets/addIcon.png";
const SearchBar = ({ onAddClick, onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="w-full flex items-center gap-2 justify-between  my-6">
        <div className=" flex items-center justify-between w-full h-10 rounded border-white border">
          <input
            onChange={onSearch}
            type="text"
            placeholder="Search Contact"
            name="search"
            id="search"
            className="w-[70%] border-none h-full outline-none px-3 text-white"
          />
          <button className=" w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <img src={searchIcon} alt="" />
          </button>
        </div>
        <button
          onClick={onAddClick}
          className={`bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer`}
        >
          <img src={addIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
