const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({}));
app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("home route hit");
});
app.delete("/todos", (req, res) => {
todos= todos.filter((ele, idx) => idx !== req.body.index);
  

  res.json({
    todos,
  });
});
app.get("/todos", (req, res) => {

  res.json({
    todos,
  });
});
app.post("/todos", (req, res) => {
  console.log(req.body);

  todos.push(req.body);
  res.json(todos);
});

app.listen(5000, () => {
  console.log("server is running");
});
