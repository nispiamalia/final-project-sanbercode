const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const LoginData = require('../support/data/LoginData');
const ProductPage = require('../support/pages/ProductPage');
const ProductData = require('../support/data/ProductData');

describe('Product Page - Positive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add first product, without product description', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductCode(ProductData.smartwatch_code);
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillPurchasePrice('3000000');
        ProductPage.fillSellPrice('4500000');
        ProductPage.fillStock('50');
        ProductPage.clickCategoryField();
        ProductPage.chooseFirstCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyAddNewProduct();
    });

    it('Add second product, all fields are filled', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductCode(ProductData.smartphone_code);
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillProductDescription('128gb, 256gb');
        ProductPage.fillPurchasePrice('15000000');
        ProductPage.fillSellPrice('17000000');
        ProductPage.fillStock('100');
        ProductPage.clickCategoryField();
        ProductPage.chooseSecondCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyAddNewProduct();
    });
})