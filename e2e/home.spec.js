import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle(/Vite \+ React/);
});

test("has click counter", async ({ page }) => {
	await page.goto("/");

	await page.getByRole("button", { name: /count is 0/i }).click();

	await expect(page.getByRole("button", { name: /count is/i })).toHaveText(/count is 1/i);
});
