const express = require("express");
const connectDB = require("./connect");
const Todo = require("./model/todoModel");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// get all todo
app.get("/todo", async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json({
    status: "success",
    Data: todo,
  });
});

app.get("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  res.status(201).json({
    status: "success",
    Data: todo,
  });
});

app.post("/todo", async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({
    status: "created",
    Data: todo,
  });
});

// update
app.patch("/todo/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndUpdate(id, req.body);
  res.status(201).json({
    status: "updated",
  });
});

// delete
app.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndDelete(id);
  res.status(201).json({
    status: "deleted",
    Data: todo,
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  connectDB();
  console.log(`server is runnig on port ${PORT}... `);
});
