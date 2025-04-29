const express = require("express");
const { getAllFormacion } = require("../../controllers/formacion.controller");
const router = express.Router();

router.get("/formacion", getAllFormacion);

module.exports = router;
