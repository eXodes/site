import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // @ts-expect-error - vitest plugins types
  plugins: [enhancedImages(), sveltekit()],
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
