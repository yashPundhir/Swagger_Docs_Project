const express = require("express");

const app = express();

// swagger docs related

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
	res.status(200).send("Home Route");
});

app.listen(4000, () => {
	console.log("app is running at port 4000");
});
