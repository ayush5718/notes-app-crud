import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, handleClearSearch }) => {
  return (
    <div className="w-40  md:w-80 flex items-center bg-slate-100 px-4">
      <input
        type="text"
        placeholder="search your notes here"
        className="py-[11px] px-6  w-full bg-transparent outline-none"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="text-xl cursor-pointer"
          onClick={handleClearSearch}
        />
      )}
      <FaSearch className="text-xl cursor-pointer" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
