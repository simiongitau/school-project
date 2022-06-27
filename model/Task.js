const mongoose = require("mongoose");
// creating the blue print for the tasks
const taskSchema = new mongoose.Schema({
  // validation
  description: {
    type: String,
    required: true,
    trim: true,
  },
  isComplited: {
    type: Boolean,
    defaut: false,
  },
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
