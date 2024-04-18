import { El } from "../../../utils/create-element";

export function QuantityCard({ product }) {
  let counter = 0;

  // function subtractButton() {
  //   const quantityCounter = document.getElementById("span-count");
  //   if (counter > 0) {
  //     counter--;
  //     quantityCounter.innerText = counter;
  //   }
  // }

  // function sumButton() {
  //   const quantityCounter = document.getElementById("span-count");
  //   if (counter < 3) {
  //     counter++;
  //     quantityCounter.innerText = counter;
  //   }
  // }

  function subtractButton() {
    let quantityCounter = document.getElementById("span-count").innerText;
    if (quantityCounter > 1) {
      quantityCounter--;
      document.getElementById("span-count").innerText = quantityCounter;
      document.getElementById("totalPrice").innerText = `$ ${
        product.price * quantityCounter
      }`;
    }
  }

  function sumButton() {
    let quantityCounter = parseInt(
      document.getElementById("span-count").innerText
    );
    if (quantityCounter < 3) {
      quantityCounter++;
      document.getElementById("span-count").innerText = quantityCounter;
      document.getElementById("totalPrice").innerText = `$ ${
        product.price * quantityCounter
      }`;
    }
  }

  return El({
    element: "div",
    className: "flex mt-6 mb-7 mx-[24px]",
    children: [
      El({
        element: "div",
        className: "font-bold",
        innerText: "Quantity",
      }),
      El({
        element: "div",
        className: "bg-gray-200 ml-10 flex gap-4 px-4 rounded-2xl",
        children: [
          El({
            element: "span",
            className: "font-bold cursor-pointer",
            id: "span-subtract",
            onclick: subtractButton,

            innerText: "-",
          }),
          El({
            element: "span",
            className: "font-bold",
            id: "span-count",
            innerText: "1",
          }),
          El({
            element: "span",
            className: "font-bold cursor-pointer",
            id: "span-sum",
            onclick: sumButton,
            innerText: "+",
          }),
        ],
      }),
    ],
  });
}
