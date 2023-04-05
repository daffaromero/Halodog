// @desc    Melihat penyakit (semua)
// @route   GET /api/v1/diseases
// @access  Public
exports.getAllDiseases = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: "Daftar semua penyakit hewan.",
      hello: req.hello,
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
exports.createDisease = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Menambahkan penyakit baru." });
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
