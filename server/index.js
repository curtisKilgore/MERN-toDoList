const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
// Ensure MongoDB is running on your machine or use an external DB
mongoose.connect("mongodb://localhost:27017/tododb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple schema for ToDo items
const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

// Create a model from the schema
const Todo = mongoose.model("Todo", todoSchema);

// Define routes here...
// Example: GET route
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
