const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require("./Data");
const path = require("path");
const multer = require("multer");
// import our model
const Deliver = require("./model/Deliver");
const Order = require("./model/Order");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const deliverRoute = require("./routes/deliver");
const productRoute = require("./routes/product");
const Image = require("./model/ImageFold");
// to user
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(orderRoute);
app.use(deliverRoute);
app.use(productRoute);
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
      category: req.body.cat,
      instore: req.body.instore,
    });
    product.save();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
app.post("/successBuy", async (req, res) => {
  console.log(req.body);
  // posting delively info
  try {
    const order = new Order({
      paid: req.body?.paymentData?.paid,
      paymentID: req.body?.paymentData?.paymentID,
      recipient_name: req.body?.paymentData?.recipient_name,
      email: req.body?.paymentData?.email,
      total: req.body?.total,
    });

    const deliver = new Deliver({
      paymentID: req.body?.paymentData?.paymentID,
      quantity: req.body?.cartsQuantity,
      email: "simion33@gmail.com",
      telphone_number: req.body?.transport?.telNumber,
      county: req.body?.transport?.county,
      location: req.body?.transport?.location,
      product: req.body?.cartDetail,
    });

    await order.save(), deliver.save();
    return res.status(200).json({ success: true, order, deliver });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});
app.listen(5000, () => console.log("server running"));
