import express from "express";
import { createStudent } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", createStudent);
// router.post("/", loginStudent);
export default router;