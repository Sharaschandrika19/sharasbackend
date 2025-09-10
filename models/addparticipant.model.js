const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
    Email: {
    type: String,
    required: true,
  },
    RSVP: {
    type: String,
    default: "No Response",
  },
  task:{
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("Participant", participantSchema);