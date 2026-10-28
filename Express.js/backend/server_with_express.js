const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({}));
app.use(express.json());

let todos = [];

app.patch("/todos", (req, res) => {
  todos = todos.map((ele, idx) => {
    if (idx==req.body.click) {
      return req.body.todos
    }
    else{
      return ele
    }
  });


  // console.log(req.body);
  // console.log(todos);
  res.json({todos})
});
app.delete("/todos", (req, res) => {
  todos = todos.filter((ele, idx) => idx !== req.body.index);

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
