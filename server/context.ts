import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { PrismaClient } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";

import * as dotenv from "dotenv";

dotenv.config();

export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  function getUserFromHeader() {
    if (req.headers.authorization !== "undefined") {
      const token = req.headers.authorization?.split(" ")[1] as string;

      const user = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

      return user;
    }

    return null;
  }

  const user = getUserFromHeader();

  return { user, req, res };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
