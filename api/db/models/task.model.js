const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  _listId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
    minlength: 1,
    trim: true,
  },
  dueDate: {
    type: String,
    minlength: 1,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
