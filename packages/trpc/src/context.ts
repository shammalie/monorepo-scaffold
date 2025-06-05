import { db } from "@repo/prisma";

export const createTRPCContext = () => {
  return {
    db,
  };
};

export type Context = ReturnType<typeof createTRPCContext>;
