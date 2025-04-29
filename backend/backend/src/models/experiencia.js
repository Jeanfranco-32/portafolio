const mongoose = require("mongoose");

const experienciaSchema = new mongoose.Schema({
	puesto: {
		type: String,
	},
	empresa: {
		type: String,
	},
	fechaInicio: {
		type: Date,
	},
	fechaFin: {
		type: Date,
	},
});

const experiencia = mongoose.model("Experiencia", experienciaSchema);
module.exports = experiencia;
