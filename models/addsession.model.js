const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    session: {
    type: String,
    required: true,
  },
     organizedby: {
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
  }
});
module.exports = mongoose.model("Session", sessionSchema);
