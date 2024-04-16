import { borderBtnsMyCart } from "../components/myCart/borderBtnsMyCart/borderBtnsMyCart";
import { modalDelete } from "../components/myCart/modalDelete/modalDelete";
import { modalDeleteOverlay } from "../components/myCart/modalDelete/modalDeleteOverlay";
import { renderMyCart } from "../components/myCart/renderMyCard/renderMyCart";
import { borderBtns } from "../components/wishlist/borderBtns/borderBtns";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { headerMyCart } from "../layout/header/headerMyCart";
import { El } from "../utils/create-element";

export function myCartPageTemplate() {
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
      footerHomePage(
        "",
        "icon-[clarity--home-line]",
        "icon-[bi--bag-fill]"
      ),
      modalDeleteOverlay(),
      modalDelete(),
    ],
  });

  return Elemenet;
}
