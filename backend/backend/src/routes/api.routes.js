const router = require("express").Router();

router.use("/usuario", require("./api/usuario.routes"));
router.use("/experiencia", require("./api/experiencia.routes"));
router.use("/formacion", require("./api/formacion.routes"));
router.use("/proyecto", require("./api/proyecto.routes"));
module.exports = router;
