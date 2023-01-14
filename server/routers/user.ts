import { router, publicProcedure } from "../trpc";
import bcrypt from "bcrypt";
import { user } from "../../prisma/script";
import { z } from "zod";

const login = publicProcedure
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
    return newUser;
  });

const hashPassword = (password: string): string => {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  return hashedPassword;
};

export const userRouter = router({
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
