const express = require("express");
const { getAllUsuario } = require("../../controllers/usuario.controller");
const router = express.Router();

router.get("/usuario", getAllUsuario);

module.exports = router;
