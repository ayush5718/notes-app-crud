import React, { useState } from "react";
import SearchBar from "./searchBar/SearchBar";
import ProfilleInfo from "./profileInfo/ProfilleInfo";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {};

  const handleClearSearch = () => {
    setSearchQuery("");
  };
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="bg-white p-2 flex justify-between items-center drop-shadow-lg">
      <Link to={"/"}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2927r61mD_3WsJsCRXWnDrt9wcxxZCSodqg&s"
          alt=""
          className="md:w-70 w-14"
        />
      </Link>

      <div>
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          handleSearch={handleSearch}
          handleClearSearch={handleClearSearch}
        />
      </div>

      <div>
        <ProfilleInfo handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Navbar;
