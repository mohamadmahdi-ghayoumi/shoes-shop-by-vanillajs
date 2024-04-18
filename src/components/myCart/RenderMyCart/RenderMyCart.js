// import { productcarts } from "../widget/productcarts";

import { getCardProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
// import { CardForWishlistPage } from "../../Wishlist/OneCartInMyCart/OneCartInMyCart";
import { OneCartInMyCart } from "../OneCartInMyCart.js/OneCartInMyCart";

export function RenderMyCart() {
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[50px] m-[24px] mb-99   items-center  justify-center ",
    id: "render",
  });

  let arrayPrice = [];
  getCardProduct().then((carts) => {
    carts.map((product) => {
      const productCard = OneCartInMyCart({ product });
      Element.append(productCard);
    });

    arrayPrice = carts.map((item) => item.totalPrice);
    const sum = arrayPrice.reduce((acc, num) => acc + num, 0);
    // console.log(sum);
    document.getElementById("priceMyCart").innerText = `${sum}`;
  });

  // console.log(Element);

  return Element;
}
