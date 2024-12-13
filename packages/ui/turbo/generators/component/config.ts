import type { PlopTypes } from "@turbo/gen";
import {
  generateDirectoryPrompt,
  generateExportPrompt,
  generateNamePrompt,
} from "turbo-utils/prompt";

export const componentConfig: PlopTypes.PlopGeneratorConfig = {
  description: "Component is a reusable UI element.",
  async prompts(inquirer) {
    const name = await inquirer.prompt([generateNamePrompt("component")]);
    const directory = await inquirer.prompt([generateDirectoryPrompt("component")]);
    const exporting = await inquirer.prompt([generateExportPrompt()]);

    return {
      ...name,
      ...directory,
      ...exporting,
    };
  },
  actions: [
    {
      type: "add",
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}.svelte",
      templateFile: "component/templates/component.svelte.hbs",
    },
    {
      type: "add",
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}.spec.ts",
      templateFile: "component/templates/component.spec.hbs",
    },
    {
      type: "append",
      path: "src/index.ts",
      pattern: /\/\* Components \*\/(?<insertion>)/g,
      template:
        'export { default as {{ pascalCase name }} } from "./{{#if directory}}{{ directory }}/{{/if}}{{dashCase name}}/{{dashCase name}}.svelte";',
      skip(data: { export: boolean }) {
        if (!data.export) return "Component not exported";
      },
    },
  ],
};
