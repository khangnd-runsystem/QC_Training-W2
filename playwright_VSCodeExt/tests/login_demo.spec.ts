import {test, expect} from '@playwright/test';

test('Demo Login Test 1', async ({page}) =>
{
    await page.goto('https://demo.applitools.com/index.html')
    await page.pause();
    await page.locator("#username").fill('KhangND');
    await page.locator("#password").fill('123456');

    await page.waitForSelector('#log-in', {timeout: 5000});
    await page.locator('#log-in').click();
    
});

test('Demo Login Test 2', async ({page}) =>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('karan user').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})

test.only('Demo Login Test 3', async ({page}) =>
{
    // await page.pause();
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.close();

})
