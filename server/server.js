import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectToDb from "./config/db.js";
dotenv.config();

const app = express();

connectToDb();
app.listen(process.env.PORT, () => {
  console.log(`server is runing on port ${process.env.PORT}`);
});
