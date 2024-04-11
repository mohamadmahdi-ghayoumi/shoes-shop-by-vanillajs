import { borderBtns } from "../components/wishlist/borderBtns/borderBtns";
import { renderWishlist } from "../components/wishlist/renderWishlist/renderWishlist";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function myCartPageTemplate() {
  const Elemenet = El({
    element: "div",
    className: "",
    children: [
      headerBack("My Cart", "icon-[iconamoon--search-thin]"),
      borderBtns(),
      El({
        element: "div",
        id: "home",
        children: [renderWishlist("all")],
      }),
    ],
  });

  return Elemenet;
}
