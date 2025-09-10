import express from "express";
import {
  getParticipants,
  createParticipants,
  getParticipantById
} from "../controllers/addparticipant.controller.js";  // ✅ same folder

const router = express.Router();

router.get("/participants", getParticipants);
router.post("/participants", createParticipants);
router.get("/participants/:id", getParticipantById); 

export default router;