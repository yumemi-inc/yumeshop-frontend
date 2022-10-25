import { test, expect, type Page } from '@playwright/test';

test.describe('', () => {
  test('can go to campaign page', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: 'top-page.png' });
    await page.locator('data-testid=campaign-card-1').first().click();
    await expect(page).toHaveURL('http://localhost:3000/campaign');
    await page.goto('https://google.com');
    await page.screenshot({ path: 'google.png' });
  });
});
