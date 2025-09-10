import Event from "../models/addresource.model.js";

// Get all resources
export const getResources = async (req, res) => {
    try {
        const resources = await Event.find();
        res.json(resources);
    } catch (error) {
        res.status(500).json({ message: "Error fetching resources", error });
    }
};


// Create resources
export const createResources = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json("Resource added successfully");
    } catch (error) {
        res.status(500).json({ message: "Error adding resource", error });
    }
};

//get resource by id
export const getResourceById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Resource not found" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Error fetching resource", error });
    }
};