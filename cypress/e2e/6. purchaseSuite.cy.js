const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const LoginData = require('../support/data/LoginData');
const PurchasePage = require('../support/pages/PurchasePage');

describe('Purchase Page - Positive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add new purchase 1st product', () => {
        PurchasePage.clickPurchaseButton();
        PurchasePage.clickAddPurchase();
        PurchasePage.fillSearchInput('ip15');
        PurchasePage.fillPurchaseNote('256gb');
        PurchasePage.clickSavePurchase();
        PurchasePage.verifyAddNewPurchase();
    });

    it('Add new purchase 2nd product', () => {
        PurchasePage.clickPurchaseButton();
        PurchasePage.clickAddPurchase();
        PurchasePage.clickProductButton();
        PurchasePage.click2ndProduct();
        PurchasePage.fillPurchaseNote('Gen 4');
        PurchasePage.clickSavePurchase();
        PurchasePage.verifyAddNewPurchase();
    });
})

describe('Purchase Page - Negative Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add new purchase without product', () => {
        PurchasePage.clickPurchaseButton();
        PurchasePage.clickAddPurchase();
        PurchasePage.fillPurchaseNote('256gb');
        PurchasePage.clickSavePurchase();
        PurchasePage.verifyEmptyProduct();
    });
})