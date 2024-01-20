const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const UserData = require('../support/data/UserData');

describe('Login - Positive Case', () => {
  it('Login with valid email and password', () => {
    LoginPage.visit();
    LoginPage.fillEmail(UserData.valid_email);
    LoginPage.fillPassword(UserData.valid_password);
    LoginPage.clickLoginButton();
    HomePage.verifyHomePage();
  });
});


describe('Login - Negative Case', () => {
  beforeEach(() => {
    LoginPage.visit();
  })
  // Tests the login functionality with invalid email
  it('Login with invalid email', () => {
    LoginPage.fillEmail(UserData.invalid_email);
    LoginPage.fillPassword(UserData.valid_password);
    LoginPage.clickLoginButton();
    LoginPage.verifyInvalidMailPass();
  })

  // Tests the login functionality with invalid password
  it('Login with invalid password', () => {
    LoginPage.fillEmail(UserData.valid_email);
    LoginPage.fillPassword(UserData.invalid_password);
    LoginPage.clickLoginButton();
    LoginPage.verifyInvalidMailPass();
  })

  // Login with empty email and password fields
  it('Login with empty fields', () => {
    LoginPage.emptyEmail();
    LoginPage.emptyPassword();
    LoginPage.clickLoginButton();
    LoginPage.verifyEmptyMailPass();
  })

  // Login with invalid email format and valid password
  it('Login with invalid email format', () => {
    LoginPage.fillEmail(UserData.invalid_email_format);
    LoginPage.fillPassword(UserData.valid_password);
    LoginPage.clickLoginButton();
    LoginPage.verifyInvalidMailFormat();
  })
})
