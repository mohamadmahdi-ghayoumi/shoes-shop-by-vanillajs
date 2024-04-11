import {
  postProductWhislist,
} from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";

export function favoriteCard({ product }) {
  function sendToWishlist() {
    const iconHeart = document.getElementById("iconHeart");
    iconHeart.classList.remove("icon-[ph--heart-light]");
    iconHeart.classList.add("icon-[icon-park-solid--like]");
    iconHeart.classList.add("text-red-500");
    postProductWhislist(product);
    // addToWishlist(product)
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
        onclick: sendToWishlist,
        id: "iconHeart",
        className: "icon-[ph--heart-light] w-[24px] h-[24px]",
      }),
    ],
  });
}
