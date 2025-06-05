import { createTRPCRouter } from "./server";

export const appRouter = createTRPCRouter({
  // Routes will be added by individual apps
});

export type AppRouter = typeof appRouter;
