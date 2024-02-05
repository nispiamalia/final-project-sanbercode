const locator = require('../locators/ProductLocator');

class ProductPage {

    async fillProductCode(code) {
        cy.get(locator.datatestid.code_product_field).clear().type(code)
    }

    async fillEmptyProductCode(code) {
        cy.get(locator.datatestid.code_product_field).clear();
    }

    async fillProductName(name) {
        cy.get(locator.datatestid.name_product_field).type(name)
    }

    async fillProductDescription(description) {
        cy.get(locator.datatestid.description_product_field).type(description);
    }

    async fillPurchasePrice(purchaseprice) {
        cy.get(locator.datatestid.purchase_price).type(purchaseprice);
    }

    async fillEmptyPurchasePrice() {
        cy.get(locator.datatestid.purchase_price).clear();
    }
    async fillSellPrice(sellprice) {
        cy.get(locator.datatestid.sell_price).type(sellprice);
    }

    async fillEmptySellPrice() {
        cy.get(locator.datatestid.sell_price).clear();
    }

    async fillStock(stock) {
        cy.get(locator.datatestid.stock).clear().type(stock);
    }

    async fillEmptyStock(stock) {
        cy.get(locator.datatestid.stock).clear();
    }

    async clickProductButton() {
        cy.get(locator.datatestid.btn_product).click();
    }

    async clickAddProductButton() {
        cy.get(locator.datatestid.btn_add_product).click();
    }

    async clickSaveProductButton() {
        cy.get(locator.datatestid.btn_save_product).click();
    }

    async clickCategoryField() {
        cy.get(locator.datatestid.category).click();
    }

    async chooseFirstCategory() {
        cy.get(':nth-child(1) > .css-u3dlpe').click();
    }

    async chooseSecondCategory() {
        cy.get(':nth-child(2) > .css-u3dlpe').click();
    }

    async verifyAddNewProduct() {
        cy.contains('item ditambahkan').should('be.visible');
    }

    async verifyEmptyName() {
        cy.contains('"name" is not allowed to be empty').should('be.visible');
    }

    async verifyEmptyCode() {
        cy.contains('"code" is not allowed to be empty').should('be.visible');
    }

    async verifyEmptyPurchasePrice() {
        cy.contains('"cost" must be a number').should('be.visible');
    }

    async verifyHigherCostPrice() {
        cy.contains('"price" must be greater than ref:cost').should('be.visible');
    }

    async verifyZeroPurchasePrice() {
        cy.contains('"cost" must be greater than 0').should('be.visible');
    }

    async verifyEmptySellPrice() {
        cy.contains('"price" must be a number').should('be.visible');
    }

    async verifyEmptyStock() {
        cy.contains('"stock" must be a number').should('be.visible');
    }
}

module.exports = new ProductPage();