import { readdirSync } from "node:fs";

export const appNames = readdirSync("./apps", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((dir) => dir.name);

export const packageNames = readdirSync("./packages", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((dir) => dir.name);

const scopes = ["repo", ...appNames, ...packageNames];

export default {
  extends: ["@commitlint/config-conventional", "monorepo"],
  rules: {
    "scope-enum": [2, "always", scopes],
  },
};
