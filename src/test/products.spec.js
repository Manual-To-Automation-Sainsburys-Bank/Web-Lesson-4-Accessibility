const ProductsPage = require('../pageobjects/products.page');
const HomePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');

describe('Add Products To Cart', async () => {

  beforeEach('Open Page', () => {
    HomePage.open();
  });
  
  it('Add 1 product and check cart', async () => {
    await HomePage.goToProductsPage();
    await ProductsPage.viewProduct(1);
    await ProductsPage.addToCart();
    await ProductsPage.viewCart();

    await expect(CartPage.cartTableSelector.length).toEqual(1);
  });

  it('Add a second product to the cart and check the cart again', async () => {
    await HomePage.goToProductsPage();
    await ProductsPage.viewProduct(2);
    await ProductsPage.addToCart();
    await ProductsPage.viewCart();

    await expect(CartPage.cartTableSelector.length).toEqual(2);
  });
})
  
  