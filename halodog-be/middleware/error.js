function errorHandler(err, req, res, next) {
  // Log error ke console
  console.log(err.stack.red);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
}

module.exports = errorHandler;
