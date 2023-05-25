const express = require("express");
const { 
  getAllDiseases,
  getDisease,
  createDisease,
  updateDisease,
  deleteDisease,
} = require("../controllers/diseases");
const Disease = require("../models/Disease");
const advancedResults = require("../middleware/advancedResults");

// Include other resource routers
const animalRouter = require("./animals");

const router = express.Router();

// Re-route into other resource routers
router.use("/:diseaseId/animals", animalRouter);

router
  .route("/")
  .get(advancedResults(Disease, "animals"), getAllDiseases)
  .post(createDisease);

router.route("/:id").get(getDisease).put(updateDisease).delete(deleteDisease);

module.exports = router;
