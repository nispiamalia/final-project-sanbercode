const locator = require('../locators/CustomerLocator');

class CustomerPage {

    async fillCustomerName(customername) {
        cy.get(locator.datatestid.name_customer).type(customername);
    }

    async fillPhoneNumber(phonenumber) {
        cy.get(locator.datatestid.phonenumber_customer).type(phonenumber);
    }

    async fillCustomerAddress(customeraddress) {
        cy.get(locator.datatestid.address_customer).type(customeraddress);
    }

    async fillCustomerNotes(customernote) {
        cy.get(locator.datatestid.note_customer).type(customernote);
    }

    async clickCustomerButton() {
        cy.get(':nth-child(9) > .css-ewi1jp').click();
    }

    async clickAddCustomer() {
        cy.get(locator.datatestid.btn_add_customer).click();
    }

    async clickSaveCustomer() {
        cy.get(locator.datatestid.btn_save_customer).click();
    }

    async verifyAddNewUser() {
        cy.contains('item ditambahkan').should('be.visible');
    }

    async verifyEmptyName() {
        cy.contains('"name" is not allowed to be empty').should('be.visible');
    }

}

module.exports = new CustomerPage();