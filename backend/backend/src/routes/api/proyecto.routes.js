const express = require("express");
const { getAllProyecto } = require("../../controllers/proyecto.controller");

const router = express.Router();

router.get("/proyecto", getAllProyecto);

module.exports = router;
