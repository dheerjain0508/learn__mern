import express from "express";
import { createproduct } from "../controllers/product.controller.js";
const router = express.Router();
router.post("/product", createproduct);
export default router;