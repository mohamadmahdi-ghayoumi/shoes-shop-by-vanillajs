import Navigo from "navigo";

import { changePage } from "../utils/change-page";
import { homePage } from "../pages/homePage.js";
import { homeAdidas } from "../templates/page-brand/homeAdidas.js";
import { homeNike } from "../templates/page-brand/homeNike.js";
import { homeReebok } from "../templates/page-brand/homeReebok.js";
import { homeNewBalance } from "../templates/page-brand/homeNewBalance.js";
import { homeAsics } from "../templates/page-brand/homeAsics.js";
import { homePuma } from "../templates/page-brand/homePuma.js";
import { homeConverse } from "../templates/page-brand/homeConverse.js";
import { homeAllBrands } from "../templates/page-brand/homeAllBrands.js";
import { mostPopular } from "../templates/mostPopular.js";
import { cardFullDetail } from "../templates/cardFull.js";
import { Product } from "../templates/selectedProduct.js";
import { WishlistPage } from "../pages/whishlist-page.js";
import { myCartPageTemplate } from "../templates/myCartPage.js";
import { brandPage } from "../templates/brandPage.js";
import { searchPage } from "../templates/searchPage.js";
import { checkoutPage } from "../templates/checkout/checkoutPage.js";
import { shippingAddressPage } from "../templates/checkout/shippingAddressPage.js";
import { chooseShipping } from "../templates/checkout/chooseShipping.js";
import { paymentMethodsPage } from "../templates/checkout/paymentMethodsPage.js";
import { successfulPage } from "../templates/checkout/successfulPage.js";
import { myOrdersPage } from "../templates/myOrders.js";
import { onboardingOnePage } from "../pages/onboarding-page/onboardingOne-page.js";
import { onboardingTwoPage } from "../pages/onboarding-page/onboradingTwo-page.js";
import { onboardingThreePage } from "../pages/onboarding-page/onboardingThree-page.js";
import { loginPage } from "../pages/login-page/login-page.js";

export const router = new Navigo("/");

router
  .on("/onboardingpageone", () => {
    changePage(onboardingOnePage);
  })
  .on("/onboardingpagetwo", () => {
    changePage(onboardingTwoPage);
  })
  .on("/onboardingpagethree", () => {
    changePage(onboardingThreePage);
  })
  .on("/login", () => {
    changePage(loginPage);
  })
  .on("/", () => {
    changePage(WishlistPage);
  })

  .on("/wishlistpage", () => {
    changePage(WishlistPage);
  })
  .on("/mycartpage", () => {
    changePage(myCartPageTemplate);
  })

  .on("/homepage", () => {
    changePage(homePage);
  })
  .on("/shoes-adidas", () => {
    changePage(homeAdidas);
  })
  .on("/shoes-nike", () => {
    changePage(homeNike);
  })
  .on("/shoes-reebok", () => {
    changePage(homeReebok);
  })
  .on("/shoes-newbalance", () => {
    changePage(homeNewBalance);
  })
  .on("/shoes-asics", () => {
    changePage(homeAsics);
  })
  .on("/shoes-puma", () => {
    changePage(homePuma);
  })
  .on("/shoes-converse", () => {
    changePage(homeConverse);
  })
  .on("/shoes-allbrands", () => {
    changePage(homeAllBrands);
  })
  .on("/shoes-mostpopular", () => {
    changePage(mostPopular);
  })
  .on("/cardfulldetail", () => {
    changePage(cardFullDetail);
  })
  .on("/checkout", () => {
    changePage(checkoutPage);
  })
  .on("/shippingaddresspage", () => {
    changePage(shippingAddressPage);
  })
  .on("/chooseshipping", () => {
    changePage(chooseShipping);
  })
  .on("/paymentmethods", () => {
    changePage(paymentMethodsPage);
  })
  .on("/successfulpage", () => {
    changePage(successfulPage);
  })
  .on("/myorderspage", () => {
    changePage(myOrdersPage);
  })
  .on("/products/:id", ({ data }) => {
    changePage(Product, data);
  })
  .on("/brand/:brand", ({ data }) => {
    console.log(data);
    changePage(brandPage, data);
  })
  .on("/searchpage", () => {
    changePage(searchPage);
  });
// .on("/", () => {
//   changePage(cardForWishlistPage);
// });
