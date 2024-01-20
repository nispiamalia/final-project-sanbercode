const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const UserData = require('../support/data/UserData');

const KategoriPage = require('../support/pages/KategoriPage');

describe('Category Page', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(UserData.valid_email);
        LoginPage.fillPassword(UserData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    })
  it('Add category', () => {
    KategoriPage.clickKategoriButton();
    KategoriPage.clickTambahKategoriButton();
    KategoriPage.fillNama('Smartphone');
    KategoriPage.fillDeskripsi('All smartphone type');
    KategoriPage.clickSimpanKategoriButton();
  });

});
