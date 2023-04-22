const mongoose = require("mongoose");
const slugify = require("slugify");

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tambahkan nama hewan"],
    unique: true,
  },
  species: {
    type: String,
    unique: true,
  },
  slug: String,
  description: {
    type: String,
    default: "I was told to put something",
    maxlength: [500, "Deskripsi penyakit tidak boleh melebihi 50 karakter"],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  disease: {
    type: mongoose.Schema.ObjectId,
    ref: "Disease",
    required: false,
  },
});

AnimalSchema.pre("save", function (next) {
  this.slug = slugify(this.species, { lower: true });
  next();
});

module.exports = mongoose.model("Animal", AnimalSchema);
