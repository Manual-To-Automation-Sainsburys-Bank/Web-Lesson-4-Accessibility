const SignupPage = require('../pageobjects/signup.page');

describe('Perform Login Operations', async () => {

  beforeEach('Open Page', () => {
    SignupPage.open();
  });
  
  it('Create a new account', async () => {
        await SignupPage.signupForAccount("Test Name", "testemail@behangary3.com");
        await SignupPage.completeSignup("Passw0rd123!", "1", "February", "1987", "Test", "Mame", 
            "MyCompanyName", "2 Main Street", "Bucharest", "United States", "Ohio", "Dayton", "12345", "1234567890");

        await expect((await SignupPage.accountCreatedBanner)).toBeDisplayed();
  });
})
  
  