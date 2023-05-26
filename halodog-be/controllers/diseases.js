const Disease = require("../models/Disease");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Melihat penyakit (semua)
// @route   GET /api/v1/diseases
// @access  Public
exports.getAllDiseases = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedResults);
});

// @desc    Melihat penyakit (ID)
// @route   GET /api/v1/diseases/:id
// @access  Public
exports.getDisease = asyncHandler(async (req, res, next) => {
  const disease = await Disease.findById(req.params.id);

  if (!disease) {
    // Kalau ID tidak ditemukan di database
    return next(
      new ErrorResponse(
        `Penyakit tidak ditemukan dengan id ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: disease,
  });
});

// @desc    Tambah Penyakit
// @route   POST /api/v1/diseases
// @access  Private
exports.createDisease = asyncHandler(async (req, res, next) => {
  const disease = await Disease.create(req.body);

  res.status(201).json({
    success: true,
    data: disease,
  });
});

// @desc    Mengubah penyakit (ID)
// @route   PUT /api/v1/diseases/:id
// @access  Private
exports.updateDisease = asyncHandler(async (req, res, next) => {
  const disease = await Disease.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!disease) {
    return next(
      new ErrorResponse(
        `Penyakit tidak ditemukan dengan id ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: disease,
  });
});

// @desc    Menghapus penyakit (ID)
// @route   DELETE /api/v1/diseases/:id
// @access  Private
exports.deleteDisease = asyncHandler(async (req, res, next) => {
  const disease = await Disease.findByIdAndDelete(req.params.id);

  if (!disease) {
    return next(
      new ErrorResponse(
        `Penyakit tidak ditemukan dengan id ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    msg: "Data berhasil dihapus.",
    data: {},
  });
});
