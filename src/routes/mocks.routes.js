import { Router } from "express";
import userMocks from "../controllers/mocks.controllers.js";
const MocksRol = new userMocks();
const router = Router();

//Get /api/mocks/mockingusers - genera 50 usuarios mockeados
router.get("/mockingusers", MocksRol.UsuariosFalsos );

// GET /api/mocks/mockingpets - tu lógica anterior de mockingpets
router.get("/mockingpets", MocksRol.animalesFalsos);

// POST /api/mocks/generateData?users=5&pets=10
router.post("/generateData", MocksRol.consultarPid );

export default router;
