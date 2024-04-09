import Navigo from "navigo";
import { changePage } from "../utils/change-page";
import { loginForm } from "../templates/login";
import { headerHomePage } from "../layout/header/header-homepage";
import { layoutHomePage } from "../layout/layout";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { marginButton } from "../components/marginButton/marginButton.js";

import { buttonsBrand } from "../widget/buttonsBrand";
import { homePage } from "../pages/homePage.js";
import { homeAdidas } from "../templates/homeAdidas.js";
import { homeNike } from "../templates/homeNike.js";
import { homeReebok } from "../templates/homeReebok.js";
import { homeNewBalance } from "../templates/homeNewBalance.js";
import { homeAsics } from "../templates/homeAsics.js";
import { homePuma } from "../templates/homePuma.js";
import { homeConverse } from "../templates/homeConverse.js";
import { homeAllBrands } from "../templates/homeAllBrands.js";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(loginForm);
  })
  .on("/homepage", () => {
    changePage(homePage);
  })
  .on("/shoesadidas", () => {
    changePage(homeAdidas);
  })
  .on("/shoesnike", () => {
    changePage(homeNike);
  })
  .on("/shoesreebok", () => {
    changePage(homeReebok);
  })
  .on("/shoesnewbalance", () => {
    changePage(homeNewBalance);
  })
  .on("/shoesasics", () => {
    changePage(homeAsics);
  })
  .on("/shoespuma", () => {
    changePage(homePuma);
  })
  .on("/shoesconverse", () => {
    changePage(homeConverse);
  })
  .on("/shoesallbrands", () => {
    changePage(homeAllBrands);
  });


  