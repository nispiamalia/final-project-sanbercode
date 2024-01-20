const locator = require('../locators/ProductLocator');

class ProductPage {

    async fillProductCode(code) {
        cy.get(locator.datatestid.code_product_field).clear().type(code)
    }

    async fillProductName(name) {
        cy.get(locator.datatestid.name_product_field).type(name)
    }

    async fillProductDescription(description) {
        cy.get(locator.datatestid.description_product_field).type(description)
    }

    async fillPurchasePrice(purchaseprice) {
        cy.get(locator.datatestid.purchase_price).type(purchaseprice)
    }

    async fillSellPrice(sellprice) {
        cy.get(locator.datatestid.sell_price).type(sellprice)
    }

    async fillStock(stock) {
        cy.get(locator.datatestid.stock).clear().type(stock)
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

    async verifyEmptyField() {
        cy.contains('"name" is not allowed to be empty').should('be.visible');
    }

}

module.exports = new ProductPage();