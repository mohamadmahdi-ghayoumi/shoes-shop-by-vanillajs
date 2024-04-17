import { getUser } from "../../../api/get/getUser";
import { addToCart } from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";

export function PriceCard({ product }) {
  function addToCard(e) {
    e.preventDefault();
    const color = document.querySelector("input[name='color']:checked");
    const size = document.querySelector("input[name='size']:checked");
    const price = document.getElementById("totalPrice").innerText;
    const quantity = document.querySelector("#span-count").innerText;
    console.log(product.price * quantity);

    if (color !== null && size !== null && quantity != "0") {

      const colorValue = color.value;
      const sizeValue = size.value;
      window.location.href = "/homepage";
      const data = {
        ...product,
        colors: colorValue,
        sizes: sizeValue,
        quantity: quantity, 
        totalPrice: product.price * quantity,
        value: Date.now(),
      };
      console.log(data);
      addToCart(data);
    } else {
    }
  }

  return El({
    element: "div",
    className: "flex gap-[40px] ml-[24px] mx-[24px]  ",
    children: [
      El({
        element: "div",
        className: "w-[20%]",
        children: [
          El({
            element: "div",
            className: "text-gray-500 text-[10px]",
            innerText: "Total price",
          }),
          El({
            element: "div",
            className: "font-bold text-[20px]",
            innerText: `$ ${product.price}`,
            id: "totalPrice",
          }),
        ],
      }),
      El({
        element: "button",
        className:
          "bg-black text-white w-full rounded-3xl hover:bg-gray-900 relative text-[14px]",
        innerText: "Add to Card",
        id: "btnAddToCard",
        onclick: addToCard,
        children: [
          El({
            element: "span",
            className:
              "icon-[lets-icons--bag-fill] text-white absolute  w-[17px]  h-[17px] start-[60px] top-[14px]",
          }),
        ],
      }),
    ],
  });
}
