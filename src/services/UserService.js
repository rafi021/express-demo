import { da, faker } from "@faker-js/faker";
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

  static store = async (data) => {
    const user = await prisma.user.create({
      data: data,
    });

    return user;
  };

  static update = async (id, data) => {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: data,
    });
    return user;
  };

  static delete = async (id) => {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  };
}

export default UserService;
