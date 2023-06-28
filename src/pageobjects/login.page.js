const Page = require("./basePage");
// login.page.js
class LoginPage extends Page {

    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitBtn () { return $('#submit') }
    get errorElement () { return $('#error') }

    async open () {
        await super.open('https://practicetestautomation.com/practice-test-login/')
    }

    async submit () {
        await this.submitBtn.click()
    }

    async doLogin (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.submitBtn.click();
    }

}

module.exports = new LoginPage()