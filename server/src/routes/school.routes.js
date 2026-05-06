import express from "express";
import { createSchool } from "../controllers/school.controller.js";
const router = express.Router();
router.post("/school", createSchool);
export default router;