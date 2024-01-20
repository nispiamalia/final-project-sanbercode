const LoginPage = require('../support/pages/LoginPage');
const HomePage = require('../support/pages/HomePage');
const LoginData = require('../support/data/LoginData');

describe('Login - Positive Case', () => {
  it('Login with valid email and password', () => {
    LoginPage.visit();
    LoginPage.fillEmail(LoginData.valid_email);
    LoginPage.fillPassword(LoginData.valid_password);
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
    LoginPage.fillEmail(LoginData.invalid_email);
    LoginPage.fillPassword(LoginData.valid_password);
    LoginPage.clickLoginButton();
    LoginPage.verifyInvalidMailPass();
  })

  // Tests the login functionality with invalid password
  it('Login with invalid password', () => {
    LoginPage.fillEmail(LoginData.valid_email);
    LoginPage.fillPassword(LoginData.invalid_password);
    LoginPage.clickLoginButton();
    LoginPage.verifyInvalidMailPass();
  })

  // Login with empty email and password fields
  it('Login with empty fields', () => {
    LoginPage.clickLoginButton();
    LoginPage.verifyEmptyMailPass();
  })

  // Login with invalid email format and valid password
  it('Login with invalid email format', () => {
    LoginPage.fillEmail(LoginData.invalid_email_format);
    LoginPage.fillPassword(LoginData.valid_password);
    LoginPage.clickLoginButton();
    LoginPage.verifyInvalidMailFormat();
  })
})
