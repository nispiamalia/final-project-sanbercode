const locator = require('../locators/KategoriLocator');

class LoginPage {

    async fillNama(nama) {
        cy.get(locator.datatestid.nama_field).type(nama)
    }

    async fillDeskripsi(deskripsi) {
        cy.get(locator.datatestid.deskripsi_field).type(deskripsi)
    }
    
    async clickKategoriButton() {
        cy.get(locator.datatestid.btn_category).click();
    }

    async clickTambahKategoriButton() {
        cy.get(locator.datatestid.btn_add_category).click();
    }

    async clickSimpanKategoriButton() {
        cy.get(locator.datatestid.btn_simpan).click();
    }

}

module.exports = new LoginPage();