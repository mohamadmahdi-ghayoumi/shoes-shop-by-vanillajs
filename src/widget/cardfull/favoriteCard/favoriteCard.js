import { addToWishlist } from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";

export function favoriteCard({ product }) {
  function sendToWishlist(){
    addToWishlist(product)
  }
  return El({
    element: "div",
    className: "flex justify-between items-center mt-[10px] mx-[24px]",
    children: [
      El({
        element: "p",
        className: "font-bold text-[25px]",
        innerText: product.name,
      }),
      El({
        element: "span",
        onclick : sendToWishlist,
        className: "icon-[ph--heart-light] w-[24px] h-[24px]",
      }),
    ],
  });
}
