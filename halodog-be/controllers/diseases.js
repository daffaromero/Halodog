const Disease = require("../models/Disease");

// @desc    Melihat penyakit (semua)
// @route   GET /api/v1/diseases
// @access  Public
exports.getAllDiseases = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Daftar semua penyakit hewan.",
  });
};

// @desc    Melihat penyakit (ID)
// @route   GET /api/v1/diseases/:id
// @access  Public
exports.getDisease = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Melihat penyakit ${req.params.id}.` });
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
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Mengubah penyakit (ID)
// @route   PUT /api/v1/diseases/:id
// @access  Private
exports.updateDisease = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Mengubah penyakit ${req.params.id}.` });
};

// @desc    Menghapus penyakit (ID)
// @route   DELETE /api/v1/diseases/:id
// @access  Private
exports.deleteDisease = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Menghapus penyakit ${req.params.id}.` });
};
