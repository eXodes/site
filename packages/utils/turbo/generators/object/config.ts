import type { PlopTypes } from "@turbo/gen";
import {
  generateDirectoryPrompt,
  generateExportPrompt,
  generateNamePrompt,
} from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  directory: string;
  export: boolean;
}

export const objectConfig: PlopTypes.PlopGeneratorConfig = {
  description: "Object is a simple JavaScript object",
  async prompts(inquirer) {
    const name = await inquirer.prompt([generateNamePrompt("object")]);
    const directory = await inquirer.prompt([generateDirectoryPrompt("object")]);
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
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}.ts",
      templateFile: "object/templates/filename.ts.hbs",
    },
    {
      type: "append",
      path: "src/index.ts",
      pattern: /\/\* Utils \*\/(?<insertion>)/g,
      template:
        'export { {{ camelCase name }} } from "./{{#if directory}}{{ directory }}/{{/if}}{{dashCase name}}/{{dashCase name}}";',
      skip(data: PromptsData) {
        if (!data.export) return "Object not exported";
      },
    },
  ],
};
