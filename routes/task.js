const express = require("express");
const router = express.Router();
// import
const {
  createTask,
  getAllTask,
  getSpecificTask,
} = require("../controler/task");

router.post("/task", createTask);
// fetching all the data
router.get("/task", getAllTask);
// gettind specific task
router.get("/task/:id", getSpecificTask);

module.exports = router;
