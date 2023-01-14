import { TRPCError, initTRPC } from "@trpc/server";
import { Context } from "./context";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
