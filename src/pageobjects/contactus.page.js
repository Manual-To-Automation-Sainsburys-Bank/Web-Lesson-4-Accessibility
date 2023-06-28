const Page = require("./basePage");
// contactus.page.js
class ContactUsPage extends Page {

    get name () { return $('[name="name"]') }
    get email () { return $('[name="email"]') }
    get subject () { return $('[name="subject"]') }
    get message () { return $('#message') }
    get submitBtn () { return $('[name="submit"]') }
    get successMessage () { return $("//div[@class='status alert alert-success']") }

    async open () {
        await super.open('https://automationexercise.com')
    }

    async fillContactForm (name, emailAddress, subject, message) {
        await this.name.setValue(name);
        await this.email.setValue(emailAddress);
        await this.subject.setValue(subject);
        await this.message.setValue(message);
        await this.submitBtn.click();
        await browser.acceptAlert();
    }
}

module.exports = new ContactUsPage()