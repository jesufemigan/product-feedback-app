import { router, publicProcedure } from "../trpc";
import bcrypt from "bcrypt";
import { user } from "../../prisma/script";
import { z } from "zod";

import jwt from "jsonwebtoken";
import { TRPCError } from "@trpc/server";

const signup = publicProcedure
  .input(
    z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    })
  )
  .query(async ({ input }) => {
    const newUser = await user.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashPassword(input.password),
      },
    });
    return {
      email: newUser.email,
      token: generateToken(newUser.email, newUser.id),
    };
  });

const login = publicProcedure
  .input(
    z.object({
      email: z.string(),
      password: z.string(),
    })
  )
  .query(async ({ input }) => {
    const userExists = await user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (userExists) {
      return {
        email: userExists.email,
        token: generateToken(userExists.email, userExists.id),
      };
    } else {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Please sign up!",
      });
    }
  });

const hashPassword = (password: string): string => {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  return hashedPassword;
};

const generateToken = (email: string, id: number) => {
  return jwt.sign({ email, id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const userRouter = router({
  signup,
  login,
  allUser: publicProcedure.query(async () => {
    const users = await user.findMany();
    return users;
  }),
  // login: publicProcedure
  //   .input(
  //     z.object({
  //       name: z.string(),
  //       email: z.string(),
  //       password: z.string()
  //     })
  //   )
  //   .query(({ input }) => {
  //     return {
  //       name: input.name,
  //       email: input.email,
  //       password: input.password
  //     }
  //   })
});
