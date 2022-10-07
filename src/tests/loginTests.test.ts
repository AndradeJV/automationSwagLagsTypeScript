import { chromium } from "playwright";


describe('Login tests', () => {
    test('Login with success', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://www.saucedemo.com/');

        await page.fill("#user-name", "standard_user");
        await page.fill("#password", "secret_sauce");
        await page.click("#login-button");

        await page.close();
    });
});