import { Router } from 'express';
import UserModel from "../dao/models/User.model.js" // Cambialo por tu modelo real

const router = Router();

// POST: Crear un nuevo usuario
router.post('/', async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await UserModel.create(userData);
    res.status(201).json({ status: 'success', user: newUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// GET: Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({ status: 'success', users });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// PUT: Actualizar un usuario por ID
router.put('/:uid', async (req, res) => {
  const { uid } = req.params;
  const updatedData = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(uid, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
    }

    res.json({ status: 'success', user: updatedUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// DELETE: Eliminar un usuario por ID
router.delete('/:uid', async (req, res) => {
  const { uid } = req.params;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(uid);

    if (!deletedUser) {
      return res.status(404).json({ status: 'error', message: 'Usuario no encontrado' });
    }

    res.json({ status: 'success', message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

export default router;