const express = require("express");
const {
  getAllAnimals,
  getAnimal,
  createAnimal,
} = require("../controllers/animals");

const router = express.Router({ mergeParams: true });

router.route("/").get(getAllAnimals).post(createAnimal);
router.route("/:id").get(getAnimal);

module.exports = router;
