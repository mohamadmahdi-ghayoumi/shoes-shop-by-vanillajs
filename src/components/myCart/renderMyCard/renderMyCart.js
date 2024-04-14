// import { productcarts } from "../widget/productcarts";

import { getCardProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { cardForWishlistPage } from "../../wishlist/cardForWishlistPage/cardForWishlistPage";
import { oneCartInMyCart } from "../oneCartInMyCart.js/oneCartInMyCart";

export function renderMyCart() {
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px]  items-center  justify-center pb-[100px]",
    id: "render",
  });

  let arrayPrice = [];
  getCardProduct().then((carts) => {
    carts.map((product) => {
      const productCard = oneCartInMyCart({ product });
      Element.append(productCard);
    });

    arrayPrice = carts.map((item) => item.price);
    const sum = arrayPrice.reduce((acc, num) => acc + num, 0);
    // console.log(sum);
     document.getElementById("priceMyCart").innerText = ` $ ${sum}` 
  });

  // console.log(Element);

  return Element;
}
