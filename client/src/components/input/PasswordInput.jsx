import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toogleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div className="flex items-center justify-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
      />

      {showPassword ? (
        <FaRegEye
          onClick={() => toogleShowPassword()}
          className="text-[#2B85FF] cursor-pointer"
        />
      ) : (
        <FaRegEyeSlash
          onClick={() => toogleShowPassword()}
          className="text-slate-400 cursor-pointer"
        />
      )}
    </div>
  );
};

export default PasswordInput;
