import User from "../models/user.model";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  if (user) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }
};
