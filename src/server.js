import http from "http";
import conf from "./configuracion/conf.js";
import app from "./app.js";

const port = conf.port;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port} con PID ${process.pid}`);
});

