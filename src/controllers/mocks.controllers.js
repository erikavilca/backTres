import userModel from "../dao/models/user.model.js";
import PetModel from "../dao/models/Pet.model.js";
import { faker } from "@faker-js/faker";
import { generateMockUsers } from "../dao/models/mockUserGenerator.js";

class userMocks {
  async UsuariosFalsos(req, res) {
    const users = generateMockUsers(50);

    console.log(`Servidor escuchando con PID ${process.pid}`);

    res.json(users);
  }

  async animalesFalsos(req, res) {
    const pets = Array.from({ length: 20 }, () => ({
      name: faker.animal.cat(),
      type: "cat",
      age: faker.number.int({ min: 1, max: 15 }),
    }));

    res.json(pets);
  }

  async consultarPid(req, res) {
    const { users = 0, pets = 0 } = req.query;
    const numUsers = parseInt(users);
    const numPets = parseInt(pets);

    const mockUsers = await generateMockUsers(numUsers);
    await userModel.insertMany(mockUsers);

    const mockPets = Array.from({ length: numPets }, () => ({
      name: faker.animal.dog(),
      type: "dog",
      age: faker.number.int({ min: 1, max: 12 }),
      owner: null, // puedes luego asignar user._id si quieres
    }));

    await PetModel.insertMany(mockPets);

    res.send(`Inserted ${numUsers} users and ${numPets} pets`);
  }
}

export default userMocks;
