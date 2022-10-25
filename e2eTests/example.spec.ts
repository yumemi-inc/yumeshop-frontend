import { test, expect, type Page } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
test.describe('', () => {
  test('1. go to campaign page and back to home', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000); // github actions では待たないと何も描画されない。
    await page.screenshot({ path: 'top-page.png' });
    await page.locator('data-testid=campaign-card-1').first().click();
    await expect(page).toHaveURL('http://localhost:3000/campaign');
    await page.waitForTimeout(1000); // github actions では待たないと何も描画されない。
    await page.screenshot({ path: 'campaign-page.png' });
    await page.locator('data-testid=campaign_go-back').click();
    await expect(page).toHaveURL('http://localhost:3000');
    await page.screenshot({ path: 'top-page-come-back.png' });
  });
});
