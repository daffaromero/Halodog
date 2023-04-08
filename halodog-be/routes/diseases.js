const express = require("express");
const {
  getAllDiseases,
  getDisease,
  createDisease,
  updateDisease,
  deleteDisease,
} = require("../controllers/diseases");

const router = express.Router();

router.route("/").get(getAllDiseases).post(createDisease);

router.route("/:id").get(getDisease).put(updateDisease).delete(deleteDisease);

module.exports = router;
