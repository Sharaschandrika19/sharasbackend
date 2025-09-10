import Event from "../models/addtask.model.js";

// Get all tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Event.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error });
    }
};

// Create tasks
export const createTasks = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.status(201).json("Task created successfully");
    } catch (error) {
        res.status(500).json({ message: "Error creating task", error });
    }
};

//get task by id
export const getTaskById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Error fetching task", error });
    }
};