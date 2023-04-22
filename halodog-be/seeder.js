const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load env variables
dotenv.config({ path: "./config/.env" });

// Load models
const Disease = require("./models/Disease");
const Animal = require("./models/Animal");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read JSON files
const diseases = JSON.parse(
  fs.readFileSync(`${__dirname}/_placeholder/diseases.json`, "utf-8")
);

const animals = JSON.parse(
  fs.readFileSync(`${__dirname}/_placeholder/animals.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Disease.create(diseases);
    await Animal.create(animals);
    console.log("Data successfully imported!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data in DB
const deleteData = async () => {
  try {
    await Disease.deleteMany();
    await Animal.deleteMany();
    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
