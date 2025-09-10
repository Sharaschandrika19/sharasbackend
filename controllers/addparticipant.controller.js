import Event from "../models/addparticipant.model.js";

// Get all participants
export const getParticipants = async (req, res) => {
    try {
        const participants = await Event.find();
        res.json(participants);
    } catch (error) {
        res.status(500).json({ message: "Error fetching participants", error });
    }
};


// Create participants
export const createParticipants = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json("Participant added successfully");
    } catch (error) {
        res.status(500).json({ message: "Error adding participant", error });
    }
};

//get participant by id
export const getParticipantById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Participant not found" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Error fetching participant", error });
    }
};