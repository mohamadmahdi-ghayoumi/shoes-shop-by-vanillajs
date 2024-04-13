import { borderBtnsMyCart } from "../components/myCart/borderBtnsMyCart/borderBtnsMyCart";
import { renderMyCart } from "../components/myCart/renderMyCard/renderMyCart";
import { borderBtns } from "../components/wishlist/borderBtns/borderBtns";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { headerMyCart } from "../layout/header/headerMyCart";
import { El } from "../utils/create-element";

export function myCartPageTemplate() {
  const Elemenet = El({
    element: "div",
    className: "",
    children: [
      headerMyCart(),
      borderBtnsMyCart(),
      El({
        element: "div",
        id: "home",
        children: [renderMyCart("all")],
      }),
      footerHomePage(),
    ],
  });

  return Elemenet;
}
