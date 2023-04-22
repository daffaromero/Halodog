const express = require("express");
const { getAnimals } = require("../controllers/animals");

const router = express.Router({ mergeParams: true });

router.route("/").get(getAnimals);

module.exports = router;
