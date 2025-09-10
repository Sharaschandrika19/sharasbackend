const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
    description: {
    type: String,
    required: true,
  },
    date:{
    type: String,
    required: true,
  },
    time: {
    type: String,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
  slotdetails:{
    type: String,
    required: true,
  },
  Attendees:{
    type:String,
    required:true,
  }
});
module.exports = mongoose.model("Event", eventSchema);// models/Team.js
