import express from "express";
import "./db.js";
import mocksRouter from "./router/mocks.router.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api/mocks", mocksRouter);
  app.use("/home", (req, res) => {
    res.send(
      "bienbnida, Este es un Backend para probar los mocks y fakers: /api/mocks/mockingusers   -----     /api/mocks/mockingpets      "
    );
  });


app.listen(PORT, () => {
  console.log("Server on port", PORT);
});
