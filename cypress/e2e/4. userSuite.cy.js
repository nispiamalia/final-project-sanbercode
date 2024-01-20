const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const LoginData = require('../support/data/LoginData');
const UserPage = require('../support/pages/UserPage');
const UserData = require('../support/data/UserData');

describe('User Page - Positive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add first user, all fields are filled', () => {
        UserPage.clickUserButton();
        UserPage.clickAddUser();
        UserPage.fillUserName(UserData.user1_name);
        UserPage.fillEmailUser(UserData.user1_email);
        UserPage.fillPasswordUser(UserData.user1_password);
        UserPage.clickSaveUser();
        UserPage.verifyAddNewUser();
    });

    it('Add seccond user, all fields are filled', () => {
        UserPage.clickUserButton();
        UserPage.clickAddUser();
        UserPage.fillUserName(UserData.user2_name);
        UserPage.fillEmailUser(UserData.user2_email);
        UserPage.fillPasswordUser(UserData.user2_password);
        UserPage.clickSaveUser();
        UserPage.verifyAddNewUser();
    });
})

describe('User Page - Negative Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    // Test that verifies if a new user cannot be added with an empty name
    it('Add new user, empty name', () => {
        UserPage.clickUserButton();
        UserPage.clickAddUser();
        UserPage.fillEmailUser(UserData.user1_email);
        UserPage.fillPasswordUser(UserData.user1_password);
        UserPage.clickSaveUser();
        UserPage.verifyEmptyName();
    });

    // Test that verifies if a new user cannot be added with an empty email
    it('Add new user, empty email', () => {
        UserPage.clickUserButton();
        UserPage.clickAddUser();
        UserPage.fillUserName(UserData.user2_name);
        UserPage.fillPasswordUser(UserData.user2_password);
        UserPage.clickSaveUser();
        UserPage.verifyEmptyEmail();
    });

    // Test that verifies if a new user cannot be added with an empty password
    it('Add new user, empty password', () => {
        UserPage.clickUserButton();
        UserPage.clickAddUser();
        UserPage.fillUserName(UserData.user2_name);
        UserPage.fillEmailUser(UserData.user1_email);
        UserPage.clickSaveUser();
        UserPage.verifyEmptyPassword();
    });

    // Test that verifies the email format
    it('Add new user, invalid email format', () => {
        UserPage.clickUserButton();
        UserPage.clickAddUser();
        UserPage.fillUserName(UserData.user1_name);
        UserPage.fillEmailUser(UserData.invalid_email_format);
        UserPage.fillPasswordUser(UserData.user2_password);
        UserPage.clickSaveUser();
        UserPage.verifyInvalidEmailFormat();
    });
})