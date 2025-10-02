import test, {Page, expect} from '@playwright/test';

test('Assertions Demo', async ({page}) =>
{
    await page.goto('https://kitchen.applitools.com/')
    await page.pause();
    // ASSERTION 
    // check element is visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    if(await page.$('text=The Kitchen') )
        await page.getByRole('heading', { name: 'The Kitchen' }).click();
    else
        console.log("Element not found");
    
    // check element is hidden 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();
    
})