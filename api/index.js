import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRouter);

// Error-handling middleware should be the last middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errMsj = err.message || "Internal server error";
  return res.status(statusCode).json({
    statusCode,
    success: false,
    message: errMsj,
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
