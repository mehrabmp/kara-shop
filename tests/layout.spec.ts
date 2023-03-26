import { test, expect } from '@playwright/test';

const topbarItems = [
  { name: 'Careers', href: '/careers' },
  { name: 'Help', href: '/help' },
  { name: 'Buyer Protection', href: '/buyer' },
  { name: '+0125 258 192 502', href: 'tel:+0125258192502' },
  { name: 'Download Mobile App', href: 'https://play.google.com' },
];

const navbarItems = [
  { name: 'Men', href: '/products/men' },
  { name: 'Women', href: '/products/women' },
  { name: 'Kids', href: '/products/kids' },
  { name: 'Sale', href: '/sale' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacts', href: '/contacts' },
];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Header', () => {
  test.describe('Topbar', () => {
    test('topbar items should have correct href', async ({ page }) => {
      for (const item of topbarItems) {
        await expect(
          page.getByRole('link', { name: item.name, exact: true })
        ).toHaveAttribute('href', item.href);
      }
    });

    test('change language to de', async ({ page }) => {
      await page.getByRole('img', { name: 'en locale' }).click();
      await page.getByRole('button', { name: 'German' }).click();

      await expect(page).toHaveURL('/de');
      await expect(page.getByRole('link', { name: 'Hilfe' })).toBeVisible();
    });

    test('change language to en', async ({ page }) => {
      await page.goto('/de');

      await page.getByRole('img', { name: 'de locale' }).click();
      await page.getByRole('button', { name: 'English' }).click();

      await expect(page).toHaveURL('/');
      await expect(page.getByRole('link', { name: 'Help' })).toBeVisible();
    });
  });

  test.describe('Navbar', () => {
    test('logo should redirect to home page', async ({ page }) => {
      await page.goto('/signin');

      await page.getByRole('link', { name: 'logo', exact: true }).click();

      await expect(page).toHaveURL('/');
    });

    test('navbar items should have correct href', async ({ page }) => {
      for (const item of navbarItems) {
        await expect(
          page.getByRole('link', { name: item.name, exact: true })
        ).toHaveAttribute('href', item.href);
      }
    });

    test('should clear search box when the clear icon clicked', async ({
      page,
    }) => {
      await page.getByPlaceholder('Search').fill('Jeans');

      await expect(page.getByTestId('clear')).toBeVisible();
      await expect(page.getByPlaceholder('Search')).toHaveValue('Jeans');

      await page.getByTestId('clear').click();

      await expect(page.getByTestId('clear')).not.toBeVisible();
      await expect(page.getByPlaceholder('Search')).toBeEmpty();
    });
  });

  test.describe('Mega menu', () => {
    // Hovering over the mega menu to open it before each test
    test.beforeEach(async ({ page }) => {
      await page.getByRole('link', { name: 'Men', exact: true }).hover();
    });

    test('mega menu should be visible by hovering over the navbar item', async ({
      page,
    }) => {
      await expect(
        page.getByRole('link', { name: 'Sneakers', exact: true })
      ).toBeVisible();
    });
  });
});
