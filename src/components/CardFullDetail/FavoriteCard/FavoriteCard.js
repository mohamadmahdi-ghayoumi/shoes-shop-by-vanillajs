import { deleteCardProductForWishlist } from "../../../api/delete/deleteProducts";
import { getWishlist, getWishlistProduct } from "../../../api/get/getProducts";
import { addToWishlist } from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";

export function FavoriteCard({ product }) {
  getWishlistProduct("all").then((data) => {
    const findItemCart = data.find((item) => item.id == product.id);
    if (findItemCart) {
      iconHeart.classList.remove("icon-[ph--heart-light]");
      iconHeart.classList.add("icon-[icon-park-solid--like]");
      iconHeart.classList.add("text-red-500");
    }
    console.log(product);
  });

  function sendToWishlist() {
    const iconHeart = document.getElementById("iconHeart");

    if (iconHeart.classList.contains("text-red-500")) {
      iconHeart.classList.add("icon-[ph--heart-light]");
      iconHeart.classList.remove("icon-[icon-park-solid--like]");
      iconHeart.classList.remove("text-red-500");
      console.log(product.id);
      deleteCardProductForWishlist(product.id);
    } else {
      console.log(product.id);

      const iconHeart = document.getElementById("iconHeart");
      iconHeart.classList.remove("icon-[ph--heart-light]");
      iconHeart.classList.add("icon-[icon-park-solid--like]");
      iconHeart.classList.add("text-red-500");
      getWishlist().then((data) => {
        console.log(data);
        console.log(product);

        const containsProduct = data.some(
          (item) => JSON.stringify(item) === JSON.stringify(product)
        );

        if (containsProduct) {
          console.log("darim");
        } else {
          console.log("dkj.arim");

          addToWishlist(product);
        }
        // if (product.indexOf(data) !== -1) {
        //   console.log("dalrim");
        // } else {
        //   addToWishlist();
        // }
      });
    }
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
