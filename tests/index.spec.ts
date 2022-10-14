import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Header', () => {
  test('should change language to De', async ({ page }) => {
    await page.getByRole('img', { name: 'en locale' }).click();

    await page.getByRole('link', { name: 'de locale German' }).click();
    await expect(page).toHaveURL('/de');

    await expect(page.getByRole('link', { name: 'Hilfe' })).toBeVisible();
    await expect(page.getByPlaceholder('Suche')).toBeEditable();
    await expect(page.getByRole('link', { name: 'Kinder' })).toBeVisible();
  });

  test('should change language to En', async ({ page }) => {
    await page.goto('/de');

    await page.getByRole('img', { name: 'de locale' }).click();

    await page.getByRole('link', { name: 'en locale English' }).click();
    await expect(page).toHaveURL('/');

    await expect(page.getByRole('link', { name: 'Help' })).toBeVisible();
    await expect(page.getByPlaceholder('Search')).toBeEditable();
    await expect(page.getByRole('link', { name: 'Kids' })).toBeVisible();
  });

  test('should clear search box when clicked the clear icon', async ({
    page,
  }) => {
    await page.getByPlaceholder('Search').fill('Jeans');

    await expect(page.getByTestId('clear')).toBeVisible();
    await expect(page.getByPlaceholder('Search')).toHaveValue('Jeans');

    await page.getByTestId('clear').click();

    await expect(page.getByTestId('clear')).not.toBeVisible();
    await expect(page.getByPlaceholder('Search')).toBeEmpty();
  });

  test('should navigate to homepage when clicked the logo', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'logo' }).click();

    await expect(page).toHaveURL('/');
  });

  /** Todo
   * test topbar links and menus
   * test search box functionality
   */
});
