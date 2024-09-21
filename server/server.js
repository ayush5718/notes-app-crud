import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.listen(process.env.PORT, () => {
  console.log(`server is runing on port ${process.env.PORT}`);
});
// importing routes

import authRouter from "./routes/auth.route.js";
import noteRouter from "./routes/note.route.js";
app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);
// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
