import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('homepage has kara shop in title', async ({ page }) => {
  await expect(page).toHaveTitle('Kara Shop');
});
