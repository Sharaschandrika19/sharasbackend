import Event from "../models/addsession.model.js";

// Get all sessions
export const getSessions = async (req, res) => {
    try {
        const sessions = await Event.find();
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sessions", error });
    }
};
// Create session
export const createSessions = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json("Session created successfully");
    } catch (error) {
        res.status(500).json({ message: "Error creating session", error });
    }
};

//get session by id
export const getSessionById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Session not found" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Error fetching session", error });
    }
};
