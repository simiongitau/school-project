const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require("./Data");
const path = require("path");
const multer = require("multer");
var fs = require("file-system");
// import our model
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");
const Image = require("./model/ImageFold");
// to user
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(taskRoute);
app.use("/images", express.static("images"));

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

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

// For Single image upload
app.post(
  "/uploadImage",
  imageUpload.single("image"),
  (req, res) => {
    res.send(req.file);
    console.log(req.body.name);
    const product = new Image({
      productImage: req.file.path,
      name: req.body.name,
      price: req.body.price,
      desc: req.body.desc,
      instore: req.body.instore,
    });
    product.save();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
app.listen(5000, () => console.log("server running"));
