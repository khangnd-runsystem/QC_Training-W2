import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click();
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('heading', { name: 'Accepted usernames are:' }).click();
  await page.getByText('Swag Labs').click();
  await page.getByText('Epic sadface: Username is requiredLogin').click();
  await page.locator('[data-test="login-button"]').click();
});