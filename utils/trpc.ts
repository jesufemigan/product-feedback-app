import { httpBatchLink } from "@trpc/client";
import { createTRPCNext, withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/routers/_app";

export let token: string;

function getBaseUrl() {
  if (typeof window !== "undefined") return "";

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            return {
              Authorization: token,
            };
          },
        }),
      ],
    };
  },
  ssr: false,
});
