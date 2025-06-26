import express from "express";
import mocksRouter from "./routes/mocks.routes.js";
import sessionRoutes from "./routes/user.routes.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
const swaggerDoc = JSON.parse(fs.readFileSync("./src/swagger/swagger.json", "utf-8"));

import bodyParser from "body-parser";

import "./db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const hbs = create();

app.use("/api/mocks", mocksRouter);
app.use("/api/sessions", sessionRoutes);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/", (req, res) => {
  console.log("Este es el server ACTUAL ejecutándose");
  res.send("Hola mundo!!");
});

export default app;
