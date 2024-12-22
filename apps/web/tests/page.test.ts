import { expect, test } from "@playwright/test";

test.describe("Index (/)", () => {
  test("has expected title", async ({ page }) => {
    await page.goto("/");

    expect(await page.title()).toBe("Exo Des");
  });
});
