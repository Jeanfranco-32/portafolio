const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/api.routes"));

app.use((req, res, next) => {
	res.status(404).json({
		message: "Not found",
	});
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: err.message });
});

module.exports = app;
