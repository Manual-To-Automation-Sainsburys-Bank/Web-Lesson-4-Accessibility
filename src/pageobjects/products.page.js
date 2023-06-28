const Page = require("./basePage");
// contactus.page.js
class ProductsPage extends Page {

    get viewProduct1Selector () { return $("//a[@href='/product_details/1']"); };
    get viewProduct2Selector () { return $("//a[@href='/product_details/2']"); };
    get product1AddToCartSelector () { return $("//a[@data-product-id='1']"); };
    get product2AddToCartSelector () { return $("//a[@data-product-id='2']"); };
    get addToCartSelector () { return $(".cart"); };
    get viewCartSelector () { return $("//div[@id='cartModal']/div[1]/div[1]/div[2]/p[2]/a"); };

    async open () {
        await super.open('https://automationexercise.com/products')
    }

    async viewProduct(prodNum) {
        await browser.execute("window.scrollBy(0,300)", "");

        if (prodNum == 1) {
            await this.viewProduct1Selector.waitForDisplayed({ timeout: 10000 });
            await this.viewProduct1Selector.click();
        } else if (prodNum == 2) {
            await this.viewProduct2Selector.waitForDisplayed({ timeout: 10000 });
            await this.viewProduct2Selector.click();
        } else {
            console.log("Invalid product number entered");
        }
    }

    async addToCart() {
        await this.addToCartSelector.waitForDisplayed({ timeout: 10000 });
        await this.addToCartSelector.click();
    }

    async viewCart() {
        await this.viewCartSelector.waitForDisplayed({ timeout: 10000 });
        await this.viewCartSelector.click();
    }
}

module.exports = new ProductsPage()