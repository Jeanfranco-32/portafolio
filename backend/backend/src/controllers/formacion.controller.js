const formacionModel = require("../models/formacion");

const getAllFormacion = async (req, res, next) => {
	try {
		console.log("Tipo de formacionModel:", typeof formacionModel);
		console.log("Contenido de formacionModel:", formacionModel);
		const formaciones = await formacionModel.find();
		res.json(formaciones);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllFormacion,
};
