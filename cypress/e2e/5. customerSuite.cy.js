const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const LoginData = require('../support/data/LoginData');
const CustomerPage = require('../support/pages/CustomerPage');
const CustomerData = require('../support/data/CustomerData');

describe('Customer Page - Positive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add new user with all fields are filled', () => {
        CustomerPage.clickCustomerButton();
        CustomerPage.clickAddCustomer();
        CustomerPage.fillCustomerName(CustomerData.customer_name1);
        CustomerPage.fillPhoneNumber(CustomerData.customer_phone);
        CustomerPage.fillCustomerAddress(CustomerData.customer_address);
        CustomerPage.fillCustomerNotes(CustomerData.customer_note);
        CustomerPage.clickSaveCustomer();
        CustomerPage.verifyAddNewUser();
    });

    it('Add new user without phone number, address, and note', () => {
        CustomerPage.clickCustomerButton();
        CustomerPage.clickAddCustomer();
        CustomerPage.fillCustomerName(CustomerData.customer_name2);
        CustomerPage.clickSaveCustomer();
        CustomerPage.verifyAddNewUser();
    });
})

describe('Customer Page - Negative Case', () => {
    before(() => {
        LoginPage.visit();
        LoginPage.fillEmail(LoginData.valid_email);
        LoginPage.fillPassword(LoginData.valid_password);
        LoginPage.clickLoginButton();
        HomePage.verifyHomePage();
    });

    it('Add new user without name', () => {
        CustomerPage.clickCustomerButton();
        CustomerPage.clickAddCustomer();
        CustomerPage.fillPhoneNumber(CustomerData.customer_phone);
        CustomerPage.fillCustomerAddress(CustomerData.customer_address);
        CustomerPage.fillCustomerNotes(CustomerData.customer_note);
        CustomerPage.clickSaveCustomer();
        CustomerPage.verifyEmptyName();
    });
})