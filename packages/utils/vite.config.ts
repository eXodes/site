import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, "src/index.ts"),
      name: "index",
      fileName: "index",
    },
  },
  test: {
    passWithNoTests: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
