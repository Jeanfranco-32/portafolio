const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
	nombre: {
		type: String,
	},
	descripcion: {
		type: String,
	},
	email: {
		type: String,
	},
	telefono: {
		type: String,
	},
	linkedin: {
		type: String,
	},
	github: {
		type: String,
	},
});

const usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = usuario;
