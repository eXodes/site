import ProjectCard, { type Project } from "./project-card.svelte";
import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

describe("ProjectCard", () => {
  test("should render component", async () => {
    const project: Project = {
      title: "Project 1",
      description: "A brief description of the project 1.",
      company: "Company 1",
      image: "https://via.placeholder.com/150",
      link: "https://example.com",
      year: 2021,
    };

    const { container } = render(ProjectCard, { project });

    expect(container.children).toMatchSnapshot();
  });
});
