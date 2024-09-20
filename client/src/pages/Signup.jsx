import React, { useState } from "react";
import PasswordInput from "../components/input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helper";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please Enter your name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter the valid Email Address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form onSubmit={handleSignup}>
          <h4 className="text-2xl mb-7">Login</h4>

          <input
            type="text"
            placeholder="Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Enter password"}
          />

          {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
          <button type="submit" className="btn-primary">
            Submit
          </button>

          <p className="text-sm text-center mt-4">
            Already an account{" "}
            <Link
              to={"/login"}
              className="font-medium text-[#2B85FF] underline"
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
