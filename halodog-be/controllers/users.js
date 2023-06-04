const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// @desc    Melihat user (semua)
// @route   GET /api/v1/auth/users
// @access  Private/Admin
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  return res.status(200).json(res.advancedResults);
});

// @desc    Melihat user (ID)
// @route   GET /api/v1/auth/users/:id
// @access  Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    // Jika ID tidak ditemukan di database
    return next(
      new ErrorResponse(`User tidak ditemukan dengan id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Menambah user
// @route   POST /api/v1/auth/users
// @access  Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  // Create user
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// @desc    Mengubah user
// @route   PUT /api/v1/auth/users/:id
// @access  Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    // Mengembalikan data baru
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Menghapus user
// @route   DELETE /api/v1/auth/users/:id
// @access  Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
