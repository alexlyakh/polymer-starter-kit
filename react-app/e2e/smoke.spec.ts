import { test, expect } from "@playwright/test";

test("loads and shows View One", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /view one/i })).toBeVisible();
});

test("navigates to View Two and Three via drawer", async ({ page }) => {
  await page.goto("/");
  const menu = page.getByRole("button").first();
  if (await menu.isVisible()) {
    await menu.click();
  }
  await page.getByRole("link", { name: /view two/i }).click();
  await expect(page.getByRole("heading", { name: /view two/i })).toBeVisible();

  if (await menu.isVisible()) {
    await menu.click();
  }
  await page.getByRole("link", { name: /view three/i }).click();
  await expect(page.getByRole("heading", { name: /view three/i })).toBeVisible();
});

test("unknown route shows 404", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { name: /view not found/i })).toBeVisible();
});
