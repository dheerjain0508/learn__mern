import { Student }from "../models/student.module.js";
import jwt from "jsonwebtoken";
 const createStudent = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all the fields" });
      }
          const token = jwt.sign(
      { id: student._id },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1d" }
    );
      
      const student = new Student({ ...req.body });
      await student.save();
      return res
        .status(201)
        .json({ msg: "Register sucessfully", name: student?.name, email: student?.email });
    } catch (err) {
      return res.status(500).json({ msg: "Sever error", error: err.message });
    }
 }
 export {createStudent};