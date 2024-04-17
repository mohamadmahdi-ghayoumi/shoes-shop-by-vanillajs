import Navigo from "navigo";

import { changePage } from "../utils/change-page";
import { homeAdidas } from "../templates/page-brand/homeAdidas.js";
import { homeNike } from "../templates/page-brand/homeNike.js";
import { homeReebok } from "../templates/page-brand/homeReebok.js";
import { homeNewBalance } from "../templates/page-brand/homeNewBalance.js";
import { homeAsics } from "../templates/page-brand/homeAsics.js";
import { homePuma } from "../templates/page-brand/homePuma.js";
import { homeConverse } from "../templates/page-brand/homeConverse.js";
import { homeAllBrands } from "../templates/page-brand/homeAllBrands.js";
import { mostPopular } from "../templates/mostPopular.js";
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
import { cardFullDetailPage } from "../pages/cardFullDetail-page/cardFullDetail-page.js";
import { homePage } from "../pages/home-page/home-page.js";
import { getCookie } from "../utils/coockie.js";

export const router = new Navigo("/");
const c = getCookie("email")

router
  .on("/onboardingpageone", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(onboardingOnePage);
}
  })
  .on("/onboardingpagetwo", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(onboardingTwoPage);
}
  })
  .on("/onboardingpagethree", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(onboardingThreePage);
}
  })
  .on("/login", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(loginPage);
}
  })
  .on("/", () => {

    if(c.length){
      changePage(homePage);
}
else {
  changePage(WishlistPage);
}
  })

  .on("/wishlistpage", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(WishlistPage);
}
    
  })
  .on("/mycartpage", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(myCartPageTemplate);
}
  })

  .on("/homepage", () => {
    if(c.length){
          changePage(homePage);
    }
    else {
      changePage(loginPage)
    }
  })
  .on("/shoes-adidas", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homeAdidas);
}
  })
  .on("/shoes-nike", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homeNike);
}
  })
  .on("/shoes-reebok", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homeReebok);
}
  })
  .on("/shoes-newbalance", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homeNewBalance);
}
  })
  .on("/shoes-asics", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homeAsics);
}
  })
  .on("/shoes-puma", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homePuma);
}
  })
  .on("/shoes-converse", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homeConverse);
}
  })
  .on("/shoes-allbrands", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(homeAllBrands);
}
  })
  .on("/shoes-mostpopular", () => {
    if(c.length){
      changePage(homePage);
}
else {
    changePage(mostPopular);
}
  })
  .on("/cardfulldetail", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(cardFullDetailPage);
}
  })
  .on("/checkout", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(checkoutPage);
}
  })
  .on("/shippingaddresspage", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(shippingAddressPage);
}
    
  })
  .on("/chooseshipping", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(chooseShipping);
}
  })
  .on("/paymentmethods", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(paymentMethodsPage);
}
  })
  .on("/successfulpage", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(successfulPage);
}
  })
  .on("/myorderspage", () => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(myOrdersPage);
}
  })
  .on("/products/:id", ({ data }) => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(Product, data);
}
  })
  .on("/brand/:brand", ({ data }) => {
    if(c.length){
      changePage(homePage);
}
else {
  changePage(brandPage, data);
}
  })
  .on("/searchpage", () => {
    changePage(searchPage);
    if(c.length){
      changePage(homePage);
}
else {
  changePage(searchPage);
}
  });
// .on("/", () => {
//   changePage(cardForWishlistPage);
// });
