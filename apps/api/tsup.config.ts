import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: "esm",
  noExternal: [/.*/],
  external: ["@prisma/client", ".prisma/client"],
  platform: "node",
  splitting: false,
  bundle: true,
  outDir: "./dist",
  clean: true,
  env: { IS_SERVER_BUILD: "true" },
  loader: { ".json": "copy" },
  minify: true, // Always minify for smaller bundles
  sourcemap: false, // Reduce size in production
  treeshake: true, // Remove unused code

  // https://github.com/egoist/tsup/issues/927#issuecomment-2416440833
  banner: ({ format }) => {
    if (format === "esm")
      return {
        js: `import { createRequire } from 'module'; import { dirname } from 'path'; import { fileURLToPath } from 'url'; const require = createRequire(import.meta.url); const __filename = fileURLToPath(import.meta.url); const __dirname = dirname(__filename);`,
      };
    return {};
  },
});
