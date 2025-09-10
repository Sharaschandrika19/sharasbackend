import express from "express";
import {
  getEvents,
  createEvents,
  updateEvent,
  deleteEvent,
  getEventById
} from "../controllers/createevent.controller.js";  // ✅ same folder

const router = express.Router();

router.get("/events", getEvents);
router.post("/events", createEvents);
router.patch("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);
router.get("/events/:id", getEventById); 

export default router;
