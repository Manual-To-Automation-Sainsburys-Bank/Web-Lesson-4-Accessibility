const Page = require("./basePage");
// login.page.js
class SignupPage extends Page {

    get name () { return $("//input[@data-qa='signup-name']"); };
    get emailAddress () { return $("//input[@data-qa='signup-email']"); };
    get signupButton () { return $("//button[@data-qa='signup-button']"); };
    get maleGender () { return $('#id_gender1'); };
    get femaleGender () { return $('#id_gender2'); };
    get password () { return $('#password'); };
    get daysDropdown () { return $('#days'); };
    get monthsDropdown () { return $('#months'); };
    get yearsDropdown () { return $('#years'); };
    get firstName () { return $('#first_name'); };
    get lastName () { return $('#last_name'); };
    get company () { return $('#company'); };
    get addressLine1 () { return $('#address1'); };
    get addressLine2 () { return $('#address2'); };
    get countryDropdown () { return $('#country'); };
    get state () { return $('#state'); };
    get city () { return $('#city'); };
    get zipcode () { return $('#zipcode'); };
    get mobileNumber () { return $('#mobile_number'); };
    get createAccountButton () { return $("//button[@data-qa='create-account']"); };
    get accountCreatedBanner () { return $("//h2[@data-qa='account-created']"); };


    async open () {
        await super.open('https://automationexercise.com/login')
    }

    async signupForAccount (name, emailAddress) {
        await this.name.waitForDisplayed({ timeout: 10000 });
        await this.name.setValue(name);
        await this.emailAddress.setValue(emailAddress);
        await this.signupButton.click();
    }

    async completeSignup (password, day, month, year, firstName, lastName, 
        companyName, addressLine1, addressLine2, country, state, city, zipcode, mobileNumber) {
        await this.maleGender.waitForDisplayed({ timeout: 10000 });
        await this.maleGender.click();

        (await this.password).setValue(password);
        (await this.daysDropdown).selectByVisibleText(day);
        (await this.monthsDropdown).selectByVisibleText(month);
        (await this.yearsDropdown).selectByVisibleText(year);
        (await this.firstName).setValue(firstName);
        (await this.lastName).setValue(lastName);
        (await this.company).setValue(companyName);
        (await this.addressLine1).setValue(addressLine1);
        (await this.addressLine2).setValue(addressLine2);
        (await this.countryDropdown).selectByVisibleText(country);
        (await this.state).setValue(state);
        (await this.city).setValue(city);
        (await this.zipcode).setValue(zipcode);
        (await this.mobileNumber).setValue(mobileNumber);

        (await this.createAccountButton).click();


    }

}

module.exports = new SignupPage()