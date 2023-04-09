const mongoose = require("mongoose");

const DiseaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // default: "Placeholder Name",
      required: [true, "Tambahkan nama penyakit"],
      unique: true,
    },
    slug: String,
    description: {
      type: String,
      default: "Something something describing",
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    bool_rule1: {
      type: Boolean,
      default: false,
    },
    bool_rule2: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "Red",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  //   { collection: "diseases" }
);

module.exports = mongoose.model("Disease", DiseaseSchema);
