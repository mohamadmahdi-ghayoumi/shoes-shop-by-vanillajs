import { getOrderProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { oneCartInCheckout } from "../oneCartInCheckout/oneCartInCheckout";

export function renderOrderCart() {
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px]  items-center  justify-center pb-[100px] m-auto",
    id: "render",
  });

  getOrderProduct().then((carts) => {
    carts.map((product) => {
      const productCard = oneCartInCheckout({ product });
      Element.append(productCard);
    });
    const arrayAmount = carts.map((item) => item.price);
    const sum = arrayAmount.reduce((acc, num) => acc + num, 0);
    document.getElementById("amount").innerText = `$ ${sum}`;
  });

  return Element;
}
