import { serve } from "@hono/node-server";
import { db } from "@repo/prisma/client";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

// Middleware
app.use("*", logger());
app.use("*", cors());

// Health check
app.get("/health", (c) => {
  return c.json({ status: "ok", message: "API server is running" });
});

// Default route
app.get("/", async (c) => {
  const t = await db.user.findMany();
  return c.json({
    message: "Welcome to the Monorepo API",
    version: "0.1.0",
    users: t.map(({ name }) => name),
  });
});

const port = 3001;
console.log(`Server is running on port ${port}`);

const server = serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    const host = info.family === "IPv6" ? `[${info.address}]` : info.address;
    console.log(`Hono internal server: http://${host}:${info.port}`);
  }
);

const shutdown = () => {
  server.close((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("\nServer has stopped gracefully.");
    }
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
