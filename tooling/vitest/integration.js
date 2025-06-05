import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: [
      "tests/**/*.{test,spec}.{js,ts,tsx}",
      "src/**/*.integration.{test,spec}.{js,ts,tsx}",
    ],
    exclude: ["node_modules", "dist", ".next"],
    testTimeout: 30000,
    hookTimeout: 30000,
    typecheck: {
      tsconfig: "./tsconfig.json",
    },
    setupFiles: ["./tests/setup.ts"],
  },
});
