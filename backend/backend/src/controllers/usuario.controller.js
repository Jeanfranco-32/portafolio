const usuarioModel = require("../models/usuario");

const getAllUsuario = async (req, res, next) => {
	try {
		const usuarios = await usuarioModel.find();
		res.json(usuarios);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllUsuario,
};
