import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // @ts-expect-error - vitest plugins types
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    passWithNoTests: true,
  },
  build: {
    commonjsOptions: {
      include: [/@repo\/ui/, /node_modules/],
    },
  },
});
