const Page = require("./basePage");
// contactus.page.js
class HomePage extends Page {

    get contactUsMenu () { return $("//a[@href='/contact_us']") };
    get loginMenu () { return $("//a[@href='/login']"); };
    get productsMenu () { return $("//a[@href='/products']"); };
    get cartMenu () { return $("//a[@href='/view_cart']"); };

    async open () {
        await super.open('https://automationexercise.com')
    }

    async goToContactUsPage() { await this.contactUsMenu.click(); };
    async goToLoginPage() { await this.loginMenu.click(); };
    async goToProductsPage() { await this.productsMenu.click(); };
    async goToCartPage() { await this.cartMenu.click(); };
}

module.exports = new HomePage()