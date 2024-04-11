import { WishlistPageTemplate } from "../templates/wishlistPage";
import { El } from "../utils/create-element";


export function WishlistPage() {
  const Elemenet = El({
    element: "div",
    className: "",
    children: [
WishlistPageTemplate()
    ],
  });

  return Elemenet;
}
