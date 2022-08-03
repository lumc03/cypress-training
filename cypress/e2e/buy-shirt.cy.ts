import {MenuContentPage} from "../page/index";
import {ProductListPage} from "../page/index";
import {ShopingCartPage} from "../page/index";
import {LoginPage} from "../page/index";
import {AdressPage} from "../page/index";
import {ShippingPage} from "../page/index";
import {PaymentPage} from "../page/index";


describe("the user buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shopingCartPage: ShopingCartPage;
  let loginPage: LoginPage;
  let adressPage: AdressPage;
  let shippingPage: ShippingPage;
  let paymentPage: PaymentPage;
  const email = "aperdomobo@gmail.com";
  const password = "WorkshopProtractor";
  const message = "Your order on My Store is complete.";

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage;
    shopingCartPage = new ShopingCartPage;
    loginPage = new LoginPage;
    adressPage = new AdressPage;
    shippingPage = new ShippingPage;
    paymentPage = new PaymentPage;
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addToCart();
    productListPage.goToCheckout();
    shopingCartPage.proceedToCheckout();
    loginPage.login(email, password);
    adressPage.proceedToCheckout();
    shippingPage.acceptTermsOfService();
    shippingPage.proceedToCheckout();
    paymentPage.validateOrderComplete(message);
  });
});
