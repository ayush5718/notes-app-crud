import React from "react";
import { getInitials } from "../../utils/helper";
const ProfilleInfo = ({ handleLogout }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex rounded-full bg-slate-100 h-12 w-12 justify-center items-center">
        {getInitials("Ram Kumar")}
      </div>
      <div>Aayush</div>
      <button
        className="bg-red-500 text-white rounded-md font-medium p-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilleInfo;
