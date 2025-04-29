const mongoose = require("mongoose");

const formacionSchema = new mongoose.Schema({
	institucion: {
		type: String,
	},
	descripcion: {
		type: String,
	},
	fechaInicio: {
		type: Date,
	},
	fechaFin: {
		type: Date,
	},
});

const formacion = mongoose.model("Formacion", formacionSchema);
module.exports = formacion;
