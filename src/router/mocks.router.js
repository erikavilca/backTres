import { Router } from "express";
import { generateMockUsers } from "../dao/models/mockUserGenerator.js";
import UserModel from "../dao/models/User.model.js";
import PetModel from "../dao/models/Pet.model.js";
import { faker } from "@faker-js/faker";
// import { createLogger } from "winston";

const router = Router();

// GET /api/mocks/mockingusers - genera 50 usuarios mockeados
router.get("/mockingusers", async (req, res) => {
  const users = await generateMockUsers(50);
  res.json(users);
});

// GET /api/mocks/mockingpets - tu lógica anterior de mockingpets
router.get("/mockingpets", (req, res) => {

  const pets = Array.from({ length: 20 }, () => ({
    name: faker.animal.cat(),
    type: "cat",
    age: faker.number.int({ min: 1, max: 15 }),
  }));

  res.json(pets);
});

// POST /api/mocks/generateData?users=5&pets=10
router.post("/generateData", async (req, res) => {
  const { users = 0, pets = 0 } = req.query;
  const numUsers = parseInt(users);
  const numPets = parseInt(pets);

  const mockUsers = await generateMockUsers(numUsers);
  await UserModel.insertMany(mockUsers);

  const mockPets = Array.from({ length: numPets }, () => ({
    name: faker.animal.dog(),
    type: "dog",
    age: faker.number.int({ min: 1, max: 12 }),
    owner: null, // puedes luego asignar user._id si quieres
  }));

  await PetModel.insertMany(mockPets);

  res.send(`Inserted ${numUsers} users and ${numPets} pets`);
});

export default router;
