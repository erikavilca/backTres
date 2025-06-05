import express from "express";
import mocksRouter from "./router/mocks.router.js";
import "./db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/mocks", mocksRouter);
app.use("/", (req, res) => {
  res.send( `Servidor escuchando en puerto  con PID ${process.pid}`)
});

export default app