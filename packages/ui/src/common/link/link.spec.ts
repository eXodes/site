import Link from "./link.svelte";
import { render } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";

describe("Link", () => {
  test("should render component", async () => {
    const { container } = render(Link, {
      href: "/login",
      children: createRawSnippet(() => {
        return {
          render: () => `<span>Login</span>`,
        };
      }),
    });

    expect(container.children).toMatchSnapshot();
  });

  test("should render with external", async () => {
    const { container } = render(Link, {
      href: "https://acme.inc",
      external: true,
      children: createRawSnippet(() => {
        return {
          render: () => `<span>Login</span>`,
        };
      }),
    });

    expect(container.children).toMatchSnapshot();
  });
});
