const express = require("express");
const {
  getAllDiseases,
  getDisease,
  createDisease,
  updateDisease,
  deleteDisease,
} = require("../controllers/diseases");

// Include other resource routers
const animalRouter = require('./animals')

const router = express.Router();

// Re-route into other resource routers
router.use('/:diseaseId/animals', animalRouter)

router.route("/").get(getAllDiseases).post(createDisease);

router.route("/:id").get(getDisease).put(updateDisease).delete(deleteDisease);

module.exports = router;
