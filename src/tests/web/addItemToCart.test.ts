// import { test } from '@playwright/test';

// import { LoginPage } from '../../support/views/pages/LoginPage';
// import { InventoryPage } from '../../support/views/pages/InventoryPage';
// import { CartPage } from '../../support/views/pages/CartPage';

// let loginPage : LoginPage;
// let inventoryPage : InventoryPage;
// let cartPage : CartPage;

// test.describe('Add anything item to cart', async () => {
//     test.beforeEach(async ({ page }) => {
//         loginPage = new LoginPage(page);
//         inventoryPage = new InventoryPage(page);
//         cartPage = new CartPage(page);

//         await loginPage.goToBaseUrl();
//     });


//     test('Add backpack to cart', async () => {
//         await loginPage.defaultLogin();
//         await inventoryPage.addBackpackToCart();
//         await inventoryPage.accessCart();
//         await cartPage.validationItemInCart();
//     });
// })