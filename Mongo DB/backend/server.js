const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({}));
app.use(express.json());
const env = require('dotenv')
env.config()
const connectDB = require("./config/db");
connectDB()
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/todos", authRoutes);


app.listen(5000, () => {
  console.log("server is running on port 5000");
});
