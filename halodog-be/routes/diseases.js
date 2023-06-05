const express = require("express");
const {
  getAllDiseases,
  getDisease,
  createDisease,
  updateDisease,
  deleteDisease,
} = require("../controllers/diseases");
const Disease = require("../models/Disease");

// Include other resource routers
const animalRouter = require("./animals");

// express router here
const router = express.Router();

const cors = require("cors");
router.use(cors());

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
router.use("/:diseaseId/animals", animalRouter);

router
  .route("/")
  .get(advancedResults(Disease, "animals"), getAllDiseases)
  .post(protect, authorize("manager", "admin"), createDisease);

router
  .route("/:id")
  .get(getDisease)
  .put(protect, authorize("manager", "admin"), updateDisease)
  .delete(protect, authorize("manager", "admin"), deleteDisease);

module.exports = router;
