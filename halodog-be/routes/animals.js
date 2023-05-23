const express = require("express");
const {
  getAllAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animals");

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllAnimals).post(createAnimal);
router.route("/:id").get(getAnimal).put(updateAnimal).delete(deleteAnimal);

module.exports = router;
