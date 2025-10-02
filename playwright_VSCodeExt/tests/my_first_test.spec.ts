const {test, expect} = require('@playwright/test');

test('My first test', async ({ page }: { page: import('@playwright/test').Page }) => {
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
});