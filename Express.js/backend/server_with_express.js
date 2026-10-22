const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({}));
app.use(express.json());

const todos = [];

app.get("/", (req, res) => {
  res.send("home route hit");
});
app.delete("/todos", (req, res) => {
  // const targetIndex = Number(req.body.index);

  // if (isNaN(targetIndex) || targetIndex < 0 || targetIndex >= todos.length) {
  //   return res.status(400).json({ error: "Invalid index" });
  // }

  // todos.splice(targetIndex, 1);


  res.json({
    message: "Todo deleted successfully",
    todos: todos,
  });
});
app.get("/todos", (req, res) => {
  console.log(req.body);

  res.send("home route hit");
});
app.post("/todos", (req, res) => {
  console.log(req.body);

  todos.push(req.body);
  res.json(todos);
});

app.listen(5000, () => {
  console.log("server is running");
});
