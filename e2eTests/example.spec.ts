import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('', () => {
  test('can go to campaign page', async ({ page }) => {
    await page.screenshot({ path: 'top-page.png' });
    await page.locator('data-testid=campaign-card-1').first().click();
    await expect(page).toHaveURL('http://localhost:3000/campaign');
  });
});
