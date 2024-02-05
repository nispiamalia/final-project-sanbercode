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
        ProductPage.fillProductName(ProductData.smartphone_name);
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

describe('Product Page - Negative Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add new product without product code', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillEmptyProductCode();
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillPurchasePrice('3000000');
        ProductPage.fillSellPrice('4500000');
        ProductPage.fillStock('50');
        ProductPage.clickCategoryField();
        ProductPage.chooseFirstCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyEmptyCode();
    });

    it('Add new product without product name', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductCode(ProductData.smartphone_code);
        ProductPage.fillProductDescription('128gb, 256gb');
        ProductPage.fillPurchasePrice('15000000');
        ProductPage.fillSellPrice('17000000');
        ProductPage.fillStock('100');
        ProductPage.clickCategoryField();
        ProductPage.chooseSecondCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyEmptyName();
    });

    it('Add new product without purchase price', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillProductCode(ProductData.smartphone_code);
        ProductPage.fillProductDescription('128gb, 256gb');
        ProductPage.fillEmptyPurchasePrice();
        ProductPage.fillSellPrice('2500000');
        ProductPage.fillStock('100');
        ProductPage.clickCategoryField();
        ProductPage.chooseSecondCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyEmptyPurchasePrice();
    });

    it('Add new product without sell price', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductCode(ProductData.smartwatch_code);
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillPurchasePrice('3000000');
        ProductPage.fillEmptySellPrice();
        ProductPage.fillStock('50');
        ProductPage.clickCategoryField();
        ProductPage.chooseFirstCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyEmptySellPrice();
    });

    it('Add new product without stock', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductCode(ProductData.smartwatch_code);
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillPurchasePrice('3000000');
        ProductPage.fillSellPrice('4500000');
        ProductPage.fillEmptyStock();
        ProductPage.clickCategoryField();
        ProductPage.chooseFirstCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyEmptyStock();
    });

    it('Add new product, purchase price is higher than sell price', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductCode(ProductData.smartwatch_code);
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillPurchasePrice('5000000');
        ProductPage.fillSellPrice('4500000');
        ProductPage.fillStock('50');
        ProductPage.clickCategoryField();
        ProductPage.chooseFirstCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyHigherCostPrice();
    });

    it('Add new product with purchase price is 0', () => {
        ProductPage.clickProductButton();
        ProductPage.clickAddProductButton();
        ProductPage.fillProductCode(ProductData.smartwatch_code);
        ProductPage.fillProductName(ProductData.smartwatch_name);
        ProductPage.fillPurchasePrice('0');
        ProductPage.fillSellPrice('4500000');
        ProductPage.fillStock('50');
        ProductPage.clickCategoryField();
        ProductPage.chooseFirstCategory();
        ProductPage.clickSaveProductButton();
        ProductPage.verifyZeroPurchasePrice();
    });

})