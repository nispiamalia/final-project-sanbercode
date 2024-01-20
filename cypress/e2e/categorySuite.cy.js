const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const UserData = require('../support/data/UserData');
const CategoryPage = require('../support/pages/CategoryPage');

describe('Category Page - Positive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(UserData.valid_email);
        LoginPage.fillPassword(UserData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add new category with name and description', () => {
        CategoryPage.clickCategoryButton();
        CategoryPage.clickAddCategoryButton();
        CategoryPage.fillName('Smartphone');
        CategoryPage.fillDescription('All smartphone brands');
        CategoryPage.clickSaveCategoryButton();
        CategoryPage.verifyAddNewCategory();
    });

    it('Add new category without description', () => {
        CategoryPage.clickCategoryButton();
        CategoryPage.clickAddCategoryButton();
        CategoryPage.fillName('Smartwatch');
        CategoryPage.clickSaveCategoryButton();
        CategoryPage.verifyAddNewCategory();
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
        CategoryPage.clickCategoryButton();
        CategoryPage.clickAddCategoryButton();
        CategoryPage.fillDescription('There is no category name');
        CategoryPage.clickSaveCategoryButton();
        CategoryPage.verifyEmptyName();
    });

    it('Add new category with empty field', () => {
        CategoryPage.clickCategoryButton();
        CategoryPage.clickAddCategoryButton();
        CategoryPage.clickSaveCategoryButton();
        CategoryPage.verifyEmptyName();
    });
})