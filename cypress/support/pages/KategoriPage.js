const locator = require('../locators/KategoriLocator');

class LoginPage {

    async fillName(name) {
        cy.get(locator.datatestid.name_field).type(name)
    }

    async fillDescription(description) {
        cy.get(locator.datatestid.description_field).type(description)
    }
    
    async fillEmptyName(emptyname) {
        cy.get(locator.datatestid.name_field).clear()
    }

    async fillEmptyDescription(description) {
        cy.get(locator.datatestid.description_field).clear()
    }

    async clickCategoryButton() {
        cy.get(locator.datatestid.btn_category).click();
    }

    async clickAddCategoryButton() {
        cy.get(locator.datatestid.btn_add_category).click();
    }

    async clickSaveCategoryButton() {
        cy.get(locator.datatestid.btn_save).click();
    }

    async verifyAddNewCategory() {
        cy.contains('item ditambahkan').should('be.visible');
    }

    async verifyEmptyName() {
        cy.contains('"name" is not allowed to be empty').should('be.visible');
    }

    async clickEditCategory() {
        cy.get(locator.datatestid.btn_edit_category).click();
    }
}

module.exports = new LoginPage();