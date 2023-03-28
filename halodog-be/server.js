const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

const app = express();

app.get("/api/v1/diseases", (req, res) => {
  res.status(200).json({ success: true, msg: "Daftar semua penyakit hewan." });
});

app.get("/api/v1/diseases/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Melihat penyakit ${req.params.id}.` });
});

app.post("/api/v1/diseases", (req, res) => {
  res.status(200).json({ success: true, msg: "Menambahkan penyakit baru." });
});

app.put("/api/v1/diseases/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Mengubah penyakit ${req.params.id}.` });
});

app.delete("/api/v1/diseases/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Menghapus penyakit ${req.params.id}.` });
});

//Enable CORS requests
app.use(cors());

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});
