const Disease = require("../models/Disease");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Melihat penyakit (semua)
// @route   GET /api/v1/diseases
// @access  Public
exports.getAllDiseases = asyncHandler(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ["select", "sort", "page", "limit"];
  removeFields.forEach((param) => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery); // Create query string
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `${match}`); // Create operators
  query = Disease.find(JSON.parse(queryStr)); // Finding resource obv

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Disease.countDocuments();

  query = query.skip(startIndex).limit(limit);

  const diseases = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    success: true,
    count: diseases.length,
    pagination,
    data: diseases,
  });
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
// @route   POST /api/v1/diseases/
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
