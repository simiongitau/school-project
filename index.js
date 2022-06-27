const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require("./Data");
// import our model
const User = require("./model/User");
const Task = require("./model/Task");
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/agrovet")
  .then(() => console.log("database connected"))
  .catch((err) => console.error(err));

// getting data from the server
console.log(Data);
app.get("/", (req, res) => {
  // res.status(200).json({'name':'simion gitau'})
  res.send(Data);
});
// post
app.post("/task", (req, res) => {
  console.log(res.body);
  // creating new object
  const task = new Task(req.body);
});
// get
// task /: id: get
//   / task /:id patch
// /task/:id delete
app.listen(5000, () => console.log("server running"));
