import {MenuContentPage} from "../page/index";
import {ProductListPage} from "../page/index";
import {ShopingCartPage} from "../page/index";
import {LoginPage} from "../page/index";
import {AdressPage} from "../page/index";
import {ShippingPage} from "../page/index";
import {PaymentPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const adressPage = new AdressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();


describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addToCart();
    productListPage.goToCheckout();
    shopingCartPage.proceedToCheckout();
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    adressPage.proceedToCheckout();
    shippingPage.acceptTermsOfService();
    shippingPage.proceedToCheckout();
    paymentPage.bankwirePayment();
    paymentPage.confirmOrder();
    paymentPage.verificationStep();
  });
});
