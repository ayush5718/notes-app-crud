import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const user = await User.findOne({ email });

    if (user) {
      return next(errorHandler(400, "User already exists"));
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = User({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    next(errorHandler(500, "Error creating user"));
  }
};

// sign in user
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isMatched = bcrypt.compareSync(password, user.password);

    if (!isMatched) {
      return next(errorHandler(400, "Invalid credentials"));
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      const { password: pass, ...rest } = user._doc;

      res.cookie("access_token", token, { httpOnly: true }).status(200).json({
        success: true,
        token,
        message: "User logged in successfully",
        rest,
      });
    }
  } catch (err) {
    next(errorHandler(500, "Error logging in user"));
  }
};
