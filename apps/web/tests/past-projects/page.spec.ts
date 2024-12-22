import { expect, test } from "@playwright/test";

test.describe("Projects (/past-projects)", () => {
  test("has expected title", async ({ page }) => {
    await page.goto("/past-projects");

    expect(await page.title()).toBe("Projects | Exo Des");
  });

  test("should have a list of projects", async ({ page }) => {
    await page.goto("/past-projects");

    const heading = await page.$("h1");
    expect(await heading?.textContent()).toBe("Past Projects");

    const projects = await page.$$("li");
    expect(projects.length).toBe(15);
  });
});
