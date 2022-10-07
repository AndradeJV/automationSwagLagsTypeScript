// import { test } from '@playwright/test';

// import { LoginPage } from '../../support/views/pages/LoginPage';
// import payload  from '../../fixtures/web/loginTests.json';


// let loginPage: LoginPage;


// test.describe('Login tests', async () => {
//     test.beforeEach(async ({ page }) => {
//         loginPage = new LoginPage(page);

//         await loginPage.goToBaseUrl();
//     });


//     test('Login success', async () => {
//         await loginPage.doLogin(payload.validLogin.username, payload.validLogin.password);
//     });

//     test('Login with incorrect username', async () => {
//         await loginPage.doIncorrectLogin('test', payload.validLogin.password);
//     });

//     test('Login with incorrect password', async () => {
//         await loginPage.doIncorrectLogin(payload.validLogin.username, 'test');
//     });

//     test('Login without credentials', async () => {
//         await loginPage.doIncorrectLogin('', '');
//     });
// });