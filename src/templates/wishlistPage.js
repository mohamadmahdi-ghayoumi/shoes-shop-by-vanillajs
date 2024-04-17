import { BorderBtnsWishlist } from "../components/Wishlist/BorderBtnsWishlist/BorderBtnsWishlist";
import { RenderWishlist } from "../components/Wishlist/RenderWishlist/RenderWishlist";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function WishlistPageTemplate() {
  const Elemenet = El({
    element: "div",
    className: "",
    children: [
      headerBack("My Wishlist", "icon-[iconamoon--search-thin]"),
      BorderBtnsWishlist(),
      El({
        element: "div",
        id: "home",
        children: [RenderWishlist("all")],
      }),
    ],
  });

  return Elemenet;
}
