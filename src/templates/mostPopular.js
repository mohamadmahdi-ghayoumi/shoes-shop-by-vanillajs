import { renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { headerHomePage } from "../layout/header/header-homepage";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";
import { marginButtons } from "../widget/marginButtons";

export function mostPopular() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [
    headerBack("Most Popular"), marginButtons(),   El({
        element: "div",
        id: "home",
        children: [renderProducts("all")],
      }),

    ],
  });

  return elemenet;
}
