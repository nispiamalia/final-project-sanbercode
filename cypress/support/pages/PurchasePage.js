const locator = require('../locators/PurchaseLocator');

class PurchasePage {

    async fillSearchInput(searchinput) {
        cy.get(locator.datatestid.search_input).type('{enter}');
    }

    async fillPurchaseNote(purchasenote) {
        cy.get(locator.datatestid.note_field).type(purchasenote);
    }

    async clickPurchaseButton() {
        cy.get(locator.datatestid.btn_purchase).click();
    }

    async clickAddPurchase() {
        cy.get(locator.datatestid.btn_add_purchase).click();
    }
    async clickSavePurchase() {
        cy.get(locator.datatestid.btn_save_purchase).click();
    }

    async verifyAddNewPurchase() {
        cy.contains('item ditambahkan').should('be.visible');
    }

    async verifyEmptyProduct() {
        cy.contains('item produk kosong').should('be.visible');
    }

    async verifyInvalidDate() {
        cy.contains('"date" must be a valid date').should('be.visible');
    }
}

module.exports = new PurchasePage();