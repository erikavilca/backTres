import mongoose  from "mongoose";
import conf from "./configuracion/conf.js";

mongoose.connect(conf.MongoUrl)
  .then(() => console.log("BDD conectado"))
  .catch((e) => console.log("error al conectar BDD:", e));
