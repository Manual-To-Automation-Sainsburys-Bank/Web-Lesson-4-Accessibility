const contactusPage = require("../pageobjects/contactus.page");
const homePage = require("../pageobjects/home.page");

describe('Perform Login Operations', async () => {

  beforeEach('Open Page', () => {
    homePage.open();
  });
  
  it('Submits  A Contact Form', async () => {
    await homePage.goToContactUsPage();
    await contactusPage.fillContactForm("FirstName LastName", "test@email.com", "Subject Text", "This is the body")

    await expect(contactusPage.successMessage).toBeDisplayed();
  });
})
  
  