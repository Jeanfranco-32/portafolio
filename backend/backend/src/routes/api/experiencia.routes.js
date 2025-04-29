const express = require("express");
const {
	getAllExperiencia,
} = require("../../controllers/experiencia.controller");
const router = express.Router();

router.get("/experiencia", getAllExperiencia);

module.exports = router;
