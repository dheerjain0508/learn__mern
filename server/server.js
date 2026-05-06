import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { createUser } from "./src/controllers/user.controller.js";
import userRouter from "./src/routes/user.routes.js";
import protect from "./src/authmiddleware.js";
import studentRouter from "./src/routes/student.routes.js";
import cors from "cors"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin:"*"
}))
// app.use("/student", studentRouter);
// app.use("/school", schoolRouter);
app.use("/user", userRouter);
app.use("/", protect, (req, res) => {
app.use("/product", productRouter);
  res.send("Hello world");
});
app.listen(5000, () => {
  connectDB();
  console.log("http://localhost:5000/");
});
