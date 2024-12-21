import { objectConfig } from "./object/config";
import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("object", objectConfig);
}
