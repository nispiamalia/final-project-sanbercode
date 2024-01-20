

class HomePage {

    async verifyHomePage() {
        cy.contains("dashboard").should('be.visible');
    }
}

module.exports = new HomePage();