import bcrypt from 'bcrypt';
import { fakerES as faker } from '@faker-js/faker';

export async function generateMockUsers(count) {

  const contraseña = await bcrypt.hash("coder123", 8);

  const users = Array.from({ length: count }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: contraseña,
    role: Math.random() > 0.5 ? 'user' : 'admin',
    pets: []
  }));

  return users;
}
