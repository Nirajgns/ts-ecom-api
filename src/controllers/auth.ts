import { Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync } from "bcrypt";

export const login = (req: Request, res: Response) => {
  res.send({ messsage: "login route working" });
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  let user = await prismaClient.user.findFirst({ where: { email: email } });

  if (user) {
    throw Error("user already exists");
  }
  user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });

  res.json(user);
};
