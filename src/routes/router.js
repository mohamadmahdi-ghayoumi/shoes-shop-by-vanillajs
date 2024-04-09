import Navigo from "navigo";
import { changePage } from "../utils/change-page";
import { loginForm } from "../templates/login";
// import { home } from "../templates/home";
import { headerHomePage } from "../layout/header/header-homepage";
import { layoutHomePage } from "../layout/layout";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { marginButton } from "../components/marginButton/marginButton.js";

import { buttonsBrand } from "../widget/buttonsBrand";
import { homePage } from "../pages/homePage.js";
export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(loginForm);
  })
  .on("/homepage", () => {
    changePage(homePage);
  });
