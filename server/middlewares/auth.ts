import { TRPCError, initTRPC } from "@trpc/server";
import { Context } from "../context";

export const t = initTRPC.context<Context>().create();

const isAuth = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuth);
