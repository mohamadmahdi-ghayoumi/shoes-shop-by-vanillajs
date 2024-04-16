import { getWishlistProduct } from "../../../api/get/getProducts";
import { addToWishlist } from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";

export function favoriteCard({ product }) {
  getWishlistProduct("all").then((data) => {
    const findItemCart = data.find((item) => item.id == product.id);
    if (findItemCart) {
      iconHeart.classList.remove("icon-[ph--heart-light]");
      iconHeart.classList.add("icon-[icon-park-solid--like]");
      iconHeart.classList.add("text-red-500");
    }
  });

  function sendToWishlist() {
    const iconHeart = document.getElementById("iconHeart");
    iconHeart.classList.remove("icon-[ph--heart-light]");
    iconHeart.classList.add("icon-[icon-park-solid--like]");
    iconHeart.classList.add("text-red-500");
    addToWishlist(product);
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
