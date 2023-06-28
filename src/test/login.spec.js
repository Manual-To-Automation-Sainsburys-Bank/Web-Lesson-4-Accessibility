const Login = require('../pageobjects/login.page');

describe('Perform Login Operations', async () => {

  beforeEach('Open Page', () => {
    Login.open();
  });
  
  it('Login Successfully', async () => {
    Login.doLogin("student", "Password123");

    await expect(browser).toHaveUrl("https://practicetestautomation.com/logged-in-successfully/");
  });

  it('Failed Login - Username', async () => {
    Login.doLogin("wrongstudent", "Password123");

    await expect(Login.errorElement).toHaveText("Your username is invalid!");
  });

  it('Failed Login - Password', async () => {
    Login.doLogin("student", "WrongPassword123");

    await expect(Login.errorElement).toHaveText("Your password is invalid!");
  });
})
  
  