import { Page, expect } from '@playwright/test';

export class BasePageConfig {
    readonly page: Page;

    constructor(page) {
        this.page = page
    }
}