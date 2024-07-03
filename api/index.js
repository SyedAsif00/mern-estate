import express, { json } from "express";
import mongoose from "mongoose";
// import UserRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO);

app.listen(3000, () => {
  console.log("server is running on 3000.");
});
app.use(express.json());
// app.use("/api/user/test", UserRouter);
app.use("/api/auth", authRouter);
