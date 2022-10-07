import { test } from '@playwright/test';

import { LoginPage } from '../../support/views/pages/LoginPage';
import { InventoryPage } from '../../support/views/pages/InventoryPage';
import { CartPage } from '../../support/views/pages/CartPage';
import { CheckoutStepOnePage } from '../../support/views/pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../../support/views/pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../../support/views/pages/CheckoutCompletePage';

import payload from '../../fixtures/web/purchaseComplete.json';


let loginPage : LoginPage;
let inventoryPage : InventoryPage;
let cartPage : CartPage;
let checkoutStepOnePage : CheckoutStepOnePage;
let checkoutStepTwoPage : CheckoutStepTwoPage;
let checkoutCompletePage : CheckoutCompletePage;


test.describe('Purchase complete', async () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutStepOnePage = new CheckoutStepOnePage(page);
        checkoutStepTwoPage = new CheckoutStepTwoPage(page);
        checkoutCompletePage = new CheckoutCompletePage(page);

        await loginPage.goToBaseUrl();
    });

    test('Do a purchase complete with a backpack item', async () => {
        await loginPage.defaultLogin();
        await inventoryPage.addBackpackToCart();
        await inventoryPage.accessCart();
        await cartPage.validationItemInCart();
        await cartPage.clickButtonCheckout();
        await checkoutStepOnePage.sendInformation(payload.informations.firstName, payload.informations.lastName, payload.informations.zipCode);
        await checkoutStepTwoPage.toFinish();
        await checkoutCompletePage.validationCompletePurchase();
        await checkoutCompletePage.goToBackHome();
        await inventoryPage.validationPage();
    })
})