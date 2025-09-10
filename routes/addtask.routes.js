import express from "express";
import {
  getTasks,
  createTasks,
  getTaskById
} from "../controllers/addtask.controller.js";  // ✅ same folder

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTasks);
router.get("/tasks/:id", getTaskById); 

export default router;
