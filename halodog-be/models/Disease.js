const mongoose = require("mongoose");
const slugify = require("slugify");

const DiseaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // default: "Placeholder Name",
      required: [true, "Tambahkan nama penyakit"],
      unique: true,
      maxlength: [50, "Nama penyakit tidak boleh melebihi 50 karakter"],
    },
    slug: String,
    description: {
      type: String,
      default: "Something something describing",
      maxlength: [500, "Deskripsi penyakit tidak boleh melebihi 50 karakter"],
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

// Membuat slug penyakit dari nama
DiseaseSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Disease", DiseaseSchema);
