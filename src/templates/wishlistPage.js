import { borderBtns } from "../components/wishlist/borderBtns/borderBtns";
import { renderWishlist } from "../components/wishlist/renderWishlist/renderWishlist";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function WishlistPageTemplate() {
  const Elemenet = El({
    element: "div",
    className: "",
    children: [
      headerBack("My Wishlist" , "icon-[iconamoon--search-thin]"),
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
