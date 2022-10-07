import { Page, expect } from '@playwright/test'; 


export class LoginPage {
    private textValidationLoginSuccess : string = 'Products';
    readonly page: Page;

    constructor(page) {
        this.page = page
    }

    async goToBaseUrl() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async defaultLogin() {
        await this.page.fill('#user-name', 'standard_user');
        await this.page.fill('#password', 'secret_sauce');
        await this.page.click("#login-button");

        expect(this.page.locator('.header_secondary_container > span')).toHaveText(this.textValidationLoginSuccess);
    }

    async doLogin(username : string, password : string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click("#login-button");

        expect(this.page.locator('.header_secondary_container > span')).toHaveText(this.textValidationLoginSuccess);
    }

    async doIncorrectLogin(username : string, password : string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click("#login-button");

        expect(this.page.locator('.login_logo')).toBeVisible();
    }
}