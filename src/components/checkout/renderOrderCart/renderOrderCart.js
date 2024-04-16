import { getCardProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { setLocalStorage } from "../../../utils/localStorage";
import { oneCartInCheckout } from "../oneCartInCheckout/oneCartInCheckout";

export function renderOrderCart() {
  // localStorage.removeItem("totalPriceAmount");

  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px]  items-center  justify-center pb-[100px] m-auto",
    id: "render",
  });

  getCardProduct().then((carts) => {
    carts.map((product) => {
      const productCard = oneCartInCheckout({ product });
      Element.append(productCard);
    });
    const arrayAmount = carts.map((item) => item.totalPrice);
    const sum = arrayAmount.reduce((acc, num) => acc + num, 0);
    document.getElementById("amount").innerText = `$ ${sum}`;
    const data = { total: sum };
    console.log(sum);
    setLocalStorage("totalPriceAmount", data);
  });

  return Element;
}
