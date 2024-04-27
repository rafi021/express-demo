import { faker } from "@faker-js/faker";
import prisma from "../config/db.js";

class UserService {
  static findAll = async () => {
    const users = await prisma.user.findMany();
    return users;
  };

  static findById = async (id) => {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return user;
  };
}

export default UserService;
