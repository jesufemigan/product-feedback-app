import { feedback, comment, upvote } from "../../prisma/script";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { protectedProcedure } from "../middlewares/auth";

const createFeedback = protectedProcedure
  .input(
    z.object({
      title: z.string(),
      detail: z.string(),
      category: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    await feedback.create({
      data: {
        title: input.title,
        detail: input.detail,
        category: input.category,
        authorId: ctx.user.id,
      },
    });

    return {
      message: "successfully created",
    };
  });

const getAllFeedbacks = protectedProcedure.query(async ({ ctx }) => {
  const allFeedbacks = await feedback.findMany({
    where: {
      id: ctx.user.id,
    },
  });

  return allFeedbacks;
});

const addComments = protectedProcedure
  .input(
    z.object({
      content: z.string(),
      id: z.string(),
    })
  )
  .query(async ({ input, ctx }) => {
    await comment.create({
      data: {
        content: input.content,
        author: { connect: { id: ctx.user.id } },
        feedback: { connect: { id: input.id } },
      },
    });

    return { message: "comment added successfully" };
  });

const upvoteFeedback = protectedProcedure
  .input(
    z.object({
      feedbackId: z.string(),
    })
  )
  .mutation(async ({ input, ctx }) => {
    const hasUserUpVoted = await upvote.findFirst({
      where: { userId: ctx.user.id, feedbackId: input.feedbackId },
    });

    if (!hasUserUpVoted) {
      await upvote.create({
        data: {
          user: { connect: { id: ctx.user.id } },
          feedback: { connect: { id: input.feedbackId } },
        },
      });
    }
  });

const getAllVotes = protectedProcedure.query(async () => {
  const allVotes = await upvote.count();
  return allVotes;
});

const Feedback = router({
  createFeedback,
  getAllFeedbacks,
  addComments,
  upvoteFeedback,
  getAllVotes,
});
