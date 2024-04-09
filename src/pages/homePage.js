import { headerHomePage } from "../layout/header/header-homepage";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { El } from "../utils/create-element";
import { buttonsBrand } from "../widget/buttonsBrand";
import { marginButtons } from "../widget/marginButtons";
import { searchBox } from "../components/homePage/searchbox/searchBox";
import { seeAll } from "../components/homePage/seeAll/seeAll";
import { renderProducts } from "../components/homePage/renderProducts/renderProducts";
export function homePage() {
  return El({
    element: "div",
    className: "",
    children: [
      headerHomePage(),
      searchBox(),
      buttonsBrand(),
      seeAll(),
      marginButtons(),
      El({
        element: "div",
        id: "home",
        children: [renderProducts("all")],
      }),
      footerHomePage(),
    ],
  });
}
