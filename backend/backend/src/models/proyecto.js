const mongoose = require("mongoose");

const proyectoSchema = new mongoose.Schema({
	nombre: {
		type: String,
	},
	tecnologias: {
		type: String,
	},
	enlace: {
		type: String,
	},
	imagen: {
		type: String,
	},
});

const proyecto = mongoose.model("proyecto", proyectoSchema);
module.exports = proyecto;
