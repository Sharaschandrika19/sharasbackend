import express from "express";
import {
  getResources,
  createResources,
  getResourceById
} from "../controllers/addresource.controller.js";  // ✅ same folder

const router = express.Router();

router.get("/resources", getResources);
router.post("/resources", createResources);
router.get("/resources/:id", getResourceById); 

export default router;