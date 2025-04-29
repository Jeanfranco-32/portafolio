const experienciaModel = require("../models/experiencia");

const getAllExperiencia = async (req, res, next) => {
	try {
		const experiencias = await experienciaModel.find();
		res.json(experiencias);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllExperiencia,
};
