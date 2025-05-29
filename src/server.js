import express from "express";
import mocksRouter from "./router/mocks.router.js";
import conf from "./configuracion/conf.js";
import "./db.js";
console.log(conf);

const port = conf.port;
const app = express();

app.use(express.json());

app.use("/api/mocks", mocksRouter);
app.use("/", (req, res) => {
  res.send(
    "bienbnida, Este es un Backend para probar los mocks y fakers: /api/mocks/mockingusers   -----     /api/mocks/mockingpets      "
  );
});

app.listen(port, () => {
  console.log("Server on port", port);
});
