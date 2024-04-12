import Navigo from "navigo";
import { changePage } from "../utils/change-page";
import { loginForm } from "../templates/login";
import { homePage } from "../pages/homePage.js";
import { homeAdidas } from "../templates/homeAdidas.js";
import { homeNike } from "../templates/homeNike.js";
import { homeReebok } from "../templates/homeReebok.js";
import { homeNewBalance } from "../templates/homeNewBalance.js";
import { homeAsics } from "../templates/homeAsics.js";
import { homePuma } from "../templates/homePuma.js";
import { homeConverse } from "../templates/homeConverse.js";
import { homeAllBrands } from "../templates/homeAllBrands.js";
import { mostPopular } from "../templates/mostPopular.js";
import { cardFullDetail } from "../templates/cardFull.js";
import { Product } from "../templates/selectedProduct.js";
import { onboardingOnePage } from "../pages/onboardingOne-page.js";
import { onboardingTwoPage } from "../pages/onboradingTwo-page.js";
import { WishlistPage } from "../pages/whishlist-page.js";
import { myCartPageTemplate } from "../templates/myCartPage.js";
import { brandPage } from "../templates/brandPage.js";
import { cardForWishlistPage } from "../components/wishlist/cardForWishlistPage/cardForWishlistPage.js";
import { searchBox } from "../components/homePage/searchbox/searchBox.js";
import { searchPage } from "../templates/searchPage.js";

// import { cardForWishlistPage } from "../components/wishlist/cardForWishlistPage/cardForWishlistPage.js";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(onboardingOnePage);
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

  .on("/products/:id", ({ data }) => {
    console.log(data)

    changePage(Product, data);
  })
  .on("/brand/:brand", ({ data }) => {
    console.log(data)
    changePage(brandPage, data);
  }).on("/searchpage", () => {
    changePage(searchPage);
  });
// .on("/", () => {
//   changePage(cardForWishlistPage);
// });
