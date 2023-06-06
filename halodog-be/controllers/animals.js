const AWS = require("aws-sdk");
const path = require("path");
const Animal = require("../models/Animal");
const Disease = require("../models/Disease");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Melihat hewan (semua)
// @route   GET /api/v1/animals
// @route   GET /api/v1/diseases/:diseaseId/animals
// @access  Public
exports.getAllAnimals = asyncHandler(async (req, res, next) => {
  if (req.params.diseaseId) {
    const animals = await Animal.find({ disease: req.params.diseaseId });

    return res.status(200).json({
      success: true,
      count: animals.length,
      data: animals,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
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

  const disease = await Disease.findById(req.params.diseaseId);

  if (!disease) {
    return next(
      new ErrorResponse(
        `Tidak ada penyakit dengan id ${req.params.bootcampId}`,
        404
      )
    );
  }

  const animal = await Animal.create(req.body);

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
  let animal = await Animal.findById(req.params.id);

  if (!animal) {
    return next(
      new ErrorResponse(`Tidak ada penyakit dengan id ${req.params.id}`, 404)
    );
  }

  animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: animal,
  });
});

// @desc    Menghapus Hewan (ID)
// @route   DELETE /api/v1/animals/:id
// @access  Private
exports.deleteAnimal = asyncHandler(async (req, res, next) => {
  const animal = await Animal.findById(req.params.id);

  if (!animal) {
    return next(
      new ErrorResponse(`Tidak ada penyakit dengan id ${req.params.id}`, 404)
    );
  }

  await animal.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc    Melihat Penyakit Hewan
// @route   POST /api/v1/animals/predict-disease
// @access  Public
exports.predictAnimalDiseases = asyncHandler(async (req, res, next) => {
  const animalName = req.body.animal;
  const symptoms = req.body.symptoms;

  if (!animalName || !symptoms) {
    return next(new ErrorResponse(`Masukkan nama hewan dan gejala.`, 400));
  }

  const animal = await Animal.findOne({ name: animalName });

  if (!animal) {
    return next(new ErrorResponse(`Hewan tidak ditemukan.`, 404));
  }

  let maxSymptomMatch = 0;
  let predictedDisease = 'Penyakit tidak ditemukan';

  for (let _id of animal.disease) {
    const disease = await Disease.findById(_id);
    let symptomMatch = 0;

    for (let symptom of symptoms) {
      if (disease.symptoms.includes(symptom)) {
        symptomMatch++;
      }

      if (symptomMatch > maxSymptomMatch) {
        maxSymptomMatch = symptomMatch;
        predictedDisease = disease.name;
      }
    }

  }

  res.status(200).json({
    success: true,
    data: predictedDisease,
  });

});

// @desc    Upload Foto Hewan
// @route   PUT /api/v1/animals/:id/photo
// @access  Private
exports.animalPhotoUpload = asyncHandler(async (req, res, next) => {
  const animal = await Animal.findById(req.params.id);

  if (!animal) {
    return next(
      new ErrorResponse(`Tidak ada penyakit dengan id ${req.params.id}`, 404)
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file.`, 400));
  }

  const file = req.files.file;

  // Pastikan bahwa file adalah foto
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file.`, 400));
  }

  // Cek ukuran file
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Ukuran foto maksimal ${process.env.MAX_FILE_UPLOAD}.`,
        400
      )
    );
  }

  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  // Buat nama file custom
  file.name = `photo_${animal._id}${path.parse(file.name).ext}`;

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file.name,
    Body: file.data,
  };

  s3.upload(params, async function (err, data) {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Terjadi kesalahan saat upload.`, 500));
    }

    await Animal.findByIdAndUpdate(req.params.id, { photo: data.Location });

    res.status(200).json({
      success: true,
      data: data.Location,
    });
  });
});

// @desc    Upload Foto Hewan (Public)
// @route   PUT /api/v1/animals/upload/photo
// @access  Public
exports.animalPhotoUploadPublic = asyncHandler(async (req, res, next) => {

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file.`, 400));
  }

  const file = req.files.file;

  // Pastikan bahwa file adalah foto
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file.`, 400));
  }

  // Cek ukuran file
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Ukuran foto maksimal ${process.env.MAX_FILE_UPLOAD}.`,
        400
      )
    );
  }

  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  // Buat nama file custom
  file.name = `photo_${path.parse(file.name).ext}`;

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file.name,
    Body: file.data,
  };

  s3.upload(params, async function (err, data) {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Terjadi kesalahan saat upload.`, 500));
    }

    res.status(200).json({
      success: true,
      data: data.Location,
    });
  });
});