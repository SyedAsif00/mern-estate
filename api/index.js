import express from "express";
import mongoose, { mongo } from "mongoose";
const app = express();
mongoose.connect(
  "mongodb+srv://khanasfii00:asifmern@cluster0.xbuzzyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
app.listen(3000, () => {
  console.log("server is running on 3000.");
});
