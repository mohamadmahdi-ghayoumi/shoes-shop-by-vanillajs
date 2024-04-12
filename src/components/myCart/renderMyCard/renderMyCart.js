
// import { productcarts } from "../widget/productcarts";

import { getCardProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { cardForWishlistPage } from "../../wishlist/cardForWishlistPage/cardForWishlistPage";
import { oneCartInMyCart } from "../oneCartInMyCart.js/oneCartInMyCart";

export function renderMyCart(filter) {
  if (!filter) {
    filter = "all";
  }
  // console.log(filter)
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px]  items-center  justify-center",
    id: "render",
  });

  getCardProduct(filter).then((carts) => {
    carts.map((product) => {
      const productCard = oneCartInMyCart({ product });
      Element.append(productCard);
    });
  });

  return Element;
}
