const locator = require('../locators/LoginLocator');

class LoginPage {

    async visit() {
        cy.visit('http://kasirdemo.belajarqa.com/');
    }

    async fillEmail(email) {
        cy.get(locator.datatestid.email_field).type(email)
    }

    async fillPassword(password) {
        cy.get(locator.datatestid.password_field).type(password)
    }

    async clickLoginButton() {
        cy.get(locator.datatestid.btn_login).click();
    }

    async verifyInvalidMailPass() {
        cy.contains("Kredensial yang Anda berikan salah").should('be.visible');
    }

    async verifyEmptyMailPass() {
        cy.contains('"email" is not allowed to be empty').should('be.visible');
    }

    async verifyInvalidMailFormat() {
        cy.contains('"email" must be a valid email').should('be.visible');
    }
}

module.exports = new LoginPage();