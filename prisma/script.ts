import { PrismaClient } from "@prisma/client";

export const { user, feedback, comment, reply } = new PrismaClient();
