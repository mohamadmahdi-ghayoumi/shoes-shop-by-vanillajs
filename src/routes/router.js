import Navigo from "navigo";
import { changePage } from "../utils/change-page";
import { loginForm } from "../templates/login";
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
import { onboardingOnePage } from "../pages/onboardingOne-page.js";
import { onboardingTwoPage } from "../pages/onboradingTwo-page.js";
import { WishlistPage } from "../pages/whishlist-page.js";
import { myCartPageTemplate } from "../templates/myCartPage.js";
import { brandPage } from "../templates/brandPage.js";
import { cardForWishlistPage } from "../components/wishlist/cardForWishlistPage/cardForWishlistPage.js";
import { searchPage } from "../templates/searchPage.js";
import { StartSlider } from "../templates/onboardingpage-three.js";
import { checkoutPage } from "../templates/Orders/checkoutPage.js";
import { shippingAddressPage } from "../templates/Orders/shippingAddressPage.js";
import { chooseShipping } from "../templates/Orders/chooseShipping.js";
import { paymentMethodsPage } from "../templates/Orders/paymentMethodsPage.js";
import { successfulPage } from "../templates/Orders/successfulPage.js";
import { myOrdersPage } from "../templates/myOrders.js";


// import { cardForWishlistPage } from "../components/wishlist/cardForWishlistPage/cardForWishlistPage.js";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(onboardingOnePage);
  })
  .on("/slider", () => {
    changePage(StartSlider);
  })
  .on("/wishlistpage", () => {
    changePage(WishlistPage);
  })
  .on("/mycartpage", () => {
    changePage(myCartPageTemplate);
  })
  .on("/onboradingpageTwo", () => {
    changePage(onboardingTwoPage);
  })
  .on("/login", () => {
    changePage(loginForm);
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
  }).on("/myorderspage", () => {
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
