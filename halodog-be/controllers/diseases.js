const Disease = require("../models/Disease");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Melihat penyakit (semua)
// @route   GET /api/v1/diseases
// @access  Public
exports.getAllDiseases = async (req, res, next) => {
  try {
    const diseases = await Disease.find();

    res.status(200).json({
      success: true,
      count: diseases.length,
      data: diseases,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Melihat penyakit (ID)
// @route   GET /api/v1/diseases/:id
// @access  Public
exports.getDisease = async (req, res, next) => {
  try {
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
  } catch (err) {
    // Kalau ID salah format
    next(err);
  }
};

// @desc    Tambah Penyakit
// @route   POST /api/v1/diseases/
// @access  Private
exports.createDisease = async (req, res, next) => {
  try {
    const disease = await Disease.create(req.body);

    res.status(201).json({
      success: true,
      data: disease,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Mengubah penyakit (ID)
// @route   PUT /api/v1/diseases/:id
// @access  Private
exports.updateDisease = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

// @desc    Menghapus penyakit (ID)
// @route   DELETE /api/v1/diseases/:id
// @access  Private
exports.deleteDisease = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};
