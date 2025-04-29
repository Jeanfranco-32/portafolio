const proyectoModel = require("../models/proyecto");

const getAllProyecto = async (req, res, next) => {
	try {
		const proyectos = await proyectoModel.find();
		res.json(proyectos);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllProyecto,
};
