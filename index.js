const express = require("express");

const app = express();

// swagger docs related

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let courses = [
	{
		id: "11",
		name: "Learn ReactJS",
		price: 299,
	},
	{
		id: "22",
		name: "Learn Angular",
		price: 399,
	},
	{
		id: "33",
		name: "Learn Django",
		price: 499,
	},
];

app.get("/api/v1/", (req, res) => {
	res.status(200).send("Home Route");
});

app.get("/api/v1/lco", (req, res) => {
	res.status(200).send("hello from lco docs");
});

app.get("/api/v1/lcoobject", (req, res) => {
	res.status(200).json({
		id: "55",
		name: "Learn Backend",
		price: 999,
	});
});

app.listen(4000, () => {
	console.log("app is running at port 4000");
});
