const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require("./Data");
// import our model
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");
// to user
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(taskRoute);

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

// get
// task /: id: get
//   / task /:id patch
// /task/:id delete
app.listen(5000, () => console.log("server running"));
