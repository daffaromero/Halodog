const Animal = require("../models/Animal");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Melihat hewan (semua)
// @route   GET /api/v1/animals
// @route   GET /api/v1/diseases/:diseaseId/annimals
// @access  Public
exports.getAnimals = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.diseaseId) {
    query = Animal.find({ disease: req.params.diseaseId });
  } else {
    query = Animal.find();
  }

  const animals = await query;

  res.status(200).json({
    success: true,
    count: animals.length,
    data: animals,
  });
});
