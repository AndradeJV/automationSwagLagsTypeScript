import { Page, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page) {
        this.page = page
    }

    async validationPage(){
        expect(this.page.locator('.header_secondary_container > span')).toBeVisible();
    }

    async accessCart(){
        await this.page.click('#shopping_cart_container > a');
    }

    async addBackpackToCart(){
        await this.page.click('#add-to-cart-sauce-labs-backpack');
    }
}