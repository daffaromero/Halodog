const express = require("express");
const {
  getAllAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
  animalPhotoUpload,
} = require("../controllers/animals");
const Animal = require("../models/Animal");

const router = express.Router({ mergeParams: true });

const cors = require("cors");
router.use(cors());

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");
const { unlock } = require("./auth");

router
  .route("/")
  .get(
    advancedResults(Animal, {
      path: "disease",
      select: "name description",
    }),
    getAllAnimals
  )
  .post(protect, authorize("manager", "admin"), createAnimal);

router
  .route("/:id")
  .get(getAnimal)
  .put(protect, authorize("manager", "admin"), updateAnimal)
  .delete(protect, authorize("manager", "admin"), deleteAnimal);
router
  .route("/:id/photo")
  .put(protect, authorize("manager", "admin"), animalPhotoUpload);

module.exports = router;
unlock;
