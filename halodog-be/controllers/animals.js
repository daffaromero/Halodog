const Animal = require("../models/Animal");
const Disease = require("../models/Disease");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Melihat hewan (semua)
// @route   GET /api/v1/animals
// @route   GET /api/v1/diseases/:diseaseId/animals
// @access  Public
exports.getAllAnimals = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.diseaseId) {
    query = Animal.find({ disease: req.params.diseaseId });
  } else {
    query = Animal.find().populate({
      path: "disease",
      select: "name description",
    });
  }

  const animals = await query;

  res.status(200).json({
    success: true,
    count: animals.length,
    data: animals,
  });
});

// @desc    Melihat hewan (ID)
// @route   GET /api/v1/animals/:id
// @access  Public
exports.getAnimal = asyncHandler(async (req, res, next) => {
  const animal = await Animal.findById(req.params.id).populate({
    path: "disease",
    select: "name description",
  });

  if (!animal) {
    return next(
      new ErrorResponse(`Tidak ada hewan dengan id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    count: animal.length,
    data: animal,
  });
});

// @desc    Tambah Hewan
// @route   POST /api/v1/diseases/:diseaseId/animals
// @access  Private
exports.createAnimal = asyncHandler(async (req, res, next) => {
  req.body.disease = req.params.diseaseId;

  const disease = await Disease.findById(req.params.diseaseId)

  if (!disease) {
    return next(
      new ErrorResponse(`Tidak ada penyakit dengan id ${req.params.bootcampId}`, 404)
    );
  }

  const animal = await Animal.create(req.body)

  res.status(200).json({
    success: true,
    count: animal.length,
    data: animal,
  });
});

// @desc    Mengubah Hewan (ID)
// @route   PUT /api/v1/animals/:id
// @access  Private
exports.updateAnimal = asyncHandler(async (req, res, next) => {
  let animal = await Animal.findById(req.params.id)

  if (!animal) {
    return next(
      new ErrorResponse(`Tidak ada penyakit dengan id ${req.params.id}`, 404)
    );
  }

  animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: animal,
  });
});

// @desc    Menghapus Hewan (ID)
// @route   DELETE /api/v1/animals/:id
// @access  Private
exports.deleteAnimal = asyncHandler(async (req, res, next) => {
  const animal = await Animal.findById(req.params.id)

  if (!animal) {
    return next(
      new ErrorResponse(`Tidak ada penyakit dengan id ${req.params.id}`, 404)
    );
  }

  await animal.deleteOne()

  res.status(200).json({
    success: true,
    data: {},
  });
});