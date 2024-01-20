const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const UserData = require('../support/data/UserData');
const KategoriPage = require('../support/pages/KategoriPage');

describe('Category Page - Positive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(UserData.valid_email);
        LoginPage.fillPassword(UserData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add new category with name and description', () => {
        KategoriPage.clickCategoryButton();
        KategoriPage.clickAddCategoryButton();
        KategoriPage.fillName('Smartphone');
        KategoriPage.fillDescription('All smartphone brands');
        KategoriPage.clickSaveCategoryButton();
        KategoriPage.verifyAddNewCategory();
    });

    it('Add new category without description', () => {
        KategoriPage.clickCategoryButton();
        KategoriPage.clickAddCategoryButton();
        KategoriPage.fillName('Smartwatch');
        KategoriPage.fillEmptyDescription();
        KategoriPage.clickSaveCategoryButton();
        KategoriPage.verifyAddNewCategory();
    });
})

describe('Category Page - Negative Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(UserData.valid_email);
        LoginPage.fillPassword(UserData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    })

    it('Add new category without name', () => {
        KategoriPage.clickCategoryButton();
        KategoriPage.clickAddCategoryButton();
        KategoriPage.fillEmptyName();
        KategoriPage.fillDescription('There is no category name');
        KategoriPage.clickSaveCategoryButton();
        KategoriPage.verifyEmptyName();
    });

    it('Add new category with empty field', () => {
        KategoriPage.clickCategoryButton();
        KategoriPage.clickAddCategoryButton();
        KategoriPage.fillEmptyName();
        KategoriPage.fillEmptyDescription();
        KategoriPage.clickSaveCategoryButton();
        KategoriPage.verifyEmptyName();
    });
})