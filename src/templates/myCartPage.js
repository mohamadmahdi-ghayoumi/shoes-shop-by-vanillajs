import { borderBtnsMyCart } from "../components/myCart/borderBtnsMyCart/borderBtnsMyCart";
import { modalDelete } from "../components/myCart/modalDelete/modalDelete";
import { modalDeleteOverlay } from "../components/myCart/modalDelete/modalDeleteOverlay";
import { renderMyCart } from "../components/myCart/renderMyCard/renderMyCart";
import { borderBtns } from "../components/wishlist/borderBtns/borderBtns";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { headerMyCart } from "../layout/header/headerMyCart";
import { El } from "../utils/create-element";
import { setLocalStorage } from "../utils/localStorage";

export function myCartPageTemplate() {
  const data = { name: "Home", address: "61480 Sunbrook Park PC 5679" };
  setLocalStorage("location", data);

  const dataShipping = { name: "", address: "", price: " 0"  , parent : "hidden" , iconBack : "show"};
  setLocalStorage("shipping", dataShipping);
  const Elemenet = El({
    element: "div",
    className: " h-[926px] ",
    children: [
      headerMyCart(),
      // borderBtnsMyCart(),
      El({
        element: "div",
        id: "home1",
        children: [],
      }),

      El({
        element: "div",
        id: "home",
        children: [renderMyCart()],
      }),
      footerHomePage("", "icon-[clarity--home-line]", "icon-[bi--bag-fill]"),
      modalDeleteOverlay(),
      modalDelete(),
    ],
  });

  return Elemenet;
}
