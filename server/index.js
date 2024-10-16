const express = require("express");
const cors = require("cors");
const Phrase = require("./model");
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://m001-student:Ibtisam@sandbox.xuwkkn8.mongodb.net/Ledger?retryWrites=true&w=majority"
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  const query = req.query.phrase;
  try {
    const phrase = await Phrase.create({ phrase: query });
    return res.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
app.post("/", async (req, res) => {
  try {
    const phrase = new Phrase({
      phrase: req.body.phrase,
    });
    await phrase.save();
    return res.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  connectDb();
  console.log("Server is running on port 5000");
});
