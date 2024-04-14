import { getOrderProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { oneCartInMyCart } from "../../myCart/oneCartInMyCart.js/oneCartInMyCart";

export function renderOrderCart() {
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px]  items-center  justify-center pb-[100px]",
    id: "render",
  });

  getOrderProduct().then((carts) => {
    carts.map((product) => {
      const productCard = oneCartInMyCart({ product });
      Element.append(productCard);
    });
  });

  return Element;
}
