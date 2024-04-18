import { getCardProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { getLocalStorage, setLocalStorage } from "../../../utils/localStorage";
import { OneCartInCheckout } from "../OneCartInCheckout/OneCartInCheckout";

export function RenderCartCheckout() {
  // localStorage.removeItem("totalPriceAmount");

  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px]  items-center  justify-center pb-[100px] m-auto",
    id: "render",
  });

  getCardProduct().then((carts) => {
    carts.map((product) => {
      const productCard = OneCartInCheckout({ product });
      Element.append(productCard);
    });
    const arrayAmount = carts.map((item) => item.totalPrice);
    const sum = arrayAmount.reduce((acc, num) => acc + num, 0);
    document.getElementById("amount").innerText = `$ ${sum}`;
    const data = { total: sum };
    console.log(sum);
    const shipping = getLocalStorage("shipping");

    document.getElementById("totalPriceee").innerText = sum + +shipping.price;
    // setLocalStorage("totalPriceAmount", data);
  });

  return Element;
}
