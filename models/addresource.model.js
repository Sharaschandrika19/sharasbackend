const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
    resourcename: {
    type: String,
    required: true,
  },
    assignee: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("Resource", resourceSchema);