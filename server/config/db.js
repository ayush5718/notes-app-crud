import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo db connected");
  } catch (err) {
    console.log("Error connecting database");
  }
};

export default connectToDb;
