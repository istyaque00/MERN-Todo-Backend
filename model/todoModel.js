const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: String,
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
