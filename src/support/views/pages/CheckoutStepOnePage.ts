import { Page, expect } from '@playwright/test';


export class CheckoutStepOnePage  {
    readonly page: Page;

    constructor(page) {
        this.page = page
    }

    async sendInformation(firstName: string, lastName: string, zipCode: string){
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', zipCode);

        await this.page.click('#continue');
    }
}