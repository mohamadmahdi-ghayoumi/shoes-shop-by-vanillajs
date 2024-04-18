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
import { shippingAddressPage } from "../templates/checkout/shippingAddressPage.js";
import { chooseShipping } from "../templates/checkout/chooseShipping.js";
import { paymentMethodsPage } from "../templates/checkout/paymentMethodsPage.js";
import { successfulPage } from "../templates/checkout/successfulPage.js";
import { onboardingOnePage } from "../pages/onboarding-page/onboardingOne-page.js";
import { onboardingTwoPage } from "../pages/onboarding-page/onboradingTwo-page.js";
import { onboardingThreePage } from "../pages/onboarding-page/onboardingThree-page.js";
import { loginPage } from "../pages/login-page/login-page.js";
import { cardFullDetailPage } from "../pages/cardFullDetail-page/cardFullDetail-page.js";
import { homePage } from "../pages/home-page/home-page.js";
import { getCookie } from "../utils/coockie.js";
import { checkoutPage } from "../pages/checkout-page/checkout-page.js";
import { myOrdersPage } from "../pages/myOrders-page/myOrders-page.js";

export const router = new Navigo("/");
const c = getCookie("email");

router
  .on("/", () => {
    if (c.length) {
      changePage(homePage);
    } else {
      changePage(onboardingOnePage);
    }
  })
  .on("/onboardingpagetwo", () => {
    if (c.length) {
      changePage(homePage);
    } else {
      changePage(onboardingTwoPage);
    }
  })
  .on("/onboardingpagethree", () => {
    if (c.length) {
      changePage(homePage);
    } else {
      changePage(onboardingThreePage);
    }
  })
  .on("/login", () => {
    // if (c.length) {
    //   changePage(homePage);
    // } else {
      changePage(loginPage);
    // }
  })

  .on("/wishlistpage", () => {
    if (c.length) {
      changePage(WishlistPage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/mycartpage", () => {
    if (c.length) {
      changePage(myCartPageTemplate);
    } else {
      changePage(loginPage);
    }
  })

  .on("/homepage", () => {
    if (c.length) {
      changePage(homePage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-adidas", () => {
    if (c.length) {
      changePage(homeAdidas);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-nike", () => {
    if (c.length) {
      changePage(homeNike);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-reebok", () => {
    if (c.length) {
      changePage(homeReebok);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-newbalance", () => {
    if (c.length) {
      changePage(homeNewBalance);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-asics", () => {
    if (c.length) {
      changePage(homeAsics);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-puma", () => {
    if (c.length) {
      changePage(homePuma);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-converse", () => {
    if (c.length) {
      changePage(homeConverse);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-allbrands", () => {
    if (c.length) {
      changePage(homeAllBrands);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shoes-mostpopular", () => {
    if (c.length) {
      changePage(mostPopular);
    } else {
      changePage(loginPage);
    }
  })
  .on("/cardfulldetail", () => {
    if (c.length) {
      changePage(cardFullDetailPage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/checkout", () => {
    if (c.length) {
      changePage(checkoutPage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/shippingaddresspage", () => {
    if (c.length) {
      changePage(shippingAddressPage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/chooseshipping", () => {
    if (c.length) {
      changePage(chooseShipping);
    } else {
      changePage(loginPage);
    }
  })
  .on("/paymentmethods", () => {
    if (c.length) {
      changePage(paymentMethodsPage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/successfulpage", () => {
    if (c.length) {
      changePage(successfulPage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/myorderspage", () => {
    if (c.length) {
      changePage(myOrdersPage);
    } else {
      changePage(loginPage);
    }
  })
  .on("/products/:id", ({ data }) => {
    if (c.length) {
      changePage(Product, data);
    } else {
      changePage(loginPage);
    }
  })
  .on("/brand/:brand", ({ data }) => {
    if (c.length) {
      changePage(brandPage, data);
    } else {
      changePage(loginPage);
    }
  })
  .on("/searchpage", () => {
    changePage(searchPage);
    if (c.length) {
      changePage(searchPage);
    } else {
      changePage(loginPage);
    }
  });
// .on("/", () => {
//   changePage(cardForWishlistPage);
// });
