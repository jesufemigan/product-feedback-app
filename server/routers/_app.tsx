import { router } from "../trpc";
import { userRouter } from "./user";
import { feedbackRouter } from "./feedback";

export const appRouter = router({
  user: userRouter,
  feedback: feedbackRouter,
});

export type AppRouter = typeof appRouter;
