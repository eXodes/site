import { expect, test } from "@playwright/test";

test("Projects page has expected title", async ({ page }) => {
  await page.goto("/past-projects");

  expect(await page.title()).toBe("Projects | Exo Des");
});
