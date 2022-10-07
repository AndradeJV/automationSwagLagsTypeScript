import { Page, expect } from '@playwright/test';

export class CartPage  {
    readonly page: Page;

    constructor(page) {
        this.page = page
    }

    async clickButtonCheckout(){
        this.page.click('#checkout');
    }
    
    async validationItemInCart(){
        expect(this.page.locator('#remove-sauce-labs-backpack')).toBeVisible();
    }
}