import express from "express";
import mocksRouter from "./routes/mocks.routes.js";
import sessionRoutes from "./routes/user.routes.js"

import "./db.js";



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hbs = create();

app.use("/api/mocks", mocksRouter);
app.use("/api/sessions" , sessionRoutes )
app.use("/", (req, res) => { res,render("Hola mundo!!") })


export default app