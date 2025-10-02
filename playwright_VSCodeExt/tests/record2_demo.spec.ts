import { test, expect } from '@playwright/test';

test('record demo 2', async ({ page, context }) => {
 
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('#login_button_container div').nth(3).click();
  await page.locator('[data-test="login-container"] div').filter({ hasText: 'Login' }).first().click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-container"] div').filter({ hasText: 'Login' }).first().click();
  await page.getByText('Swag Labs123').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();

});