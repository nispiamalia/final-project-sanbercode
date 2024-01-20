const locator = require('../locators/UserLocator');

class UserPage {

    async fillUserName(username) {
        cy.get(locator.datatestid.name_user).type(username);
    }

    async fillEmailUser(emailuser) {
        cy.get(locator.datatestid.email_user).type(emailuser);
    }

    async fillPasswordUser(passworduser) {
        cy.get(locator.datatestid.password_user).type(passworduser);
    }

    async clickUserButton() {
        cy.get(locator.datatestid.btn_user).click();
    }

    async clickAddUser() {
        cy.get(locator.datatestid.btn_add_user).click();
    }

    async clickSaveUser() {
        cy.get(locator.datatestid.btn_save_user).click();
    }

    async verifyAddNewUser() {
        cy.contains('item ditambahkan').should('be.visible');
    }

    async verifyEmptyName() {
        cy.contains('"name" is not allowed to be empty').should('be.visible');
    }

    async verifyEmptyEmail() {
        cy.contains('"email" is not allowed to be empty').should('be.visible');
    }

    async verifyEmptyPassword() {
        cy.contains('"password" is not allowed to be empty').should('be.visible');
    }

    async verifyInvalidEmailFormat() {
        cy.contains('"email" must be a valid email').should('be.visible');
    }
}

module.exports = new UserPage();