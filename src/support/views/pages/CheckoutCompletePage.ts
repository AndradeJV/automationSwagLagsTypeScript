import { Page, expect } from '@playwright/test';


export class CheckoutCompletePage  {
    readonly page: Page;
    private textValidationFinishedPurchase : string = 'THANK YOU FOR YOUR ORDER'

    constructor(page) {
        this.page = page;
    }

    async validationCompletePurchase(){
        expect(this.page.locator('#checkout_complete_container > h2')).toHaveText(this.textValidationFinishedPurchase);
    }

    async goToBackHome(){
        await this.page.click('#back-to-products');
    }
}