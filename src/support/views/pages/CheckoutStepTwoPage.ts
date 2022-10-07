import { Page, expect } from '@playwright/test';


export class CheckoutStepTwoPage  {
    readonly page: Page;

    constructor(page) {
        this.page = page;
    }

    async toFinish(){
        await this.page.click('#finish');
    }
}