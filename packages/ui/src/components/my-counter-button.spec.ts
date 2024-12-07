import MyCounterButton from "./my-counter-button.svelte";
import { render, screen } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

describe("MyCounterButton", () => {
  test("should be able to increment click count", async () => {
    render(MyCounterButton);

    const ButtonEl = screen.getByText("Clicks: 0");
    expect(ButtonEl).toBeVisible();

    await userEvent.click(ButtonEl);

    expect(ButtonEl).toHaveTextContent("Clicks: 1");
  });
});
