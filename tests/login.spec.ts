import { test, expect } from '@playwright/test';

test('login page loads', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});
// edit login.spec.ts, add a comment line: // change A
// edit login.spec.ts, add a comment line: // change B
