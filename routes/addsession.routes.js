import express from "express";
import {
  getSessions,
  createSessions,
  getSessionById
} from "../controllers/addsession.controller.js";  // ✅ same folder

const router = express.Router();

router.get("/sessions", getSessions);
router.post("/sessions", createSessions);
router.get("/sessions/:id", getSessionById); 

export default router;