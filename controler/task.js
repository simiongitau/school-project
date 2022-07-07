const Task = require("../model/Task");

exports.createTask = async (req, res) => {
  console.log(res.body);
  // creating new object
  try {
    const task = new Task(req.body);
    console.log(task);
    await task.save();
    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllTask = async (req, res) => {
  // find is used to retrive or fertch data from the mongo db
  const tasks = await Task.find();
  if (!tasks) {
    return res.status(404).json({
      success: false,
      message: "tasks does not exist",
    });
  }
  return res.json({ success: true, tasks });
};

exports.getSpecificTask = async (req, res) => {
  // find is used to retrive or fertch data from the mongo db
  console.log(req.params.id);
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "task does not exist",
    });
  }
  return res.json({ success: true, task });
};
