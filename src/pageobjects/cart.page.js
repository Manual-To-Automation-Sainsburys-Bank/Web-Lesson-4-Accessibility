const Page = require('./basePage');

class CartPage extends Page {
    get cartTableSelector () { return $$("//tbody/tr"); };

    async open () {
        await super.open('https://automationexercise.com/view_cart')
    }
}

module.exports = new CartPage()