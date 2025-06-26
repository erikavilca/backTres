import { Router } from "express";
import userModel from "../dao/models/user.model.js"; // Cambialo por tu modelo real

const router = Router();

// GET: Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({ status: "success", users });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// POST: Crear un nuevo usuario
router.post("/", async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await userModel.create(userData);
    res.status(201).send("usuario creado correctamente" + newUser.first_name);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// PUT: Actualizar un usuario por ID
router.put("/:uid", async (req, res) => {
  const { uid } = req.params;
  const updatedData = req.body;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(uid, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ status: "error", message: "Usuario no encontrado" });
    }

    res.status(201).json({ status: "success", user: updatedUser });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// DELETE: Eliminar un usuario por ID
router.delete("/:uid", async (req, res) => {
  const { uid } = req.params;

  try {
    const deletedUser = await userModel.findByIdAndDelete(uid);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ status: "error", message: "Usuario no encontrado" });
    }

    res.status(200).json({ status: "success", message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

export default router;
