import { El } from "../../../utils/create-element";

export function quantityCard() {
  let counter = 0;

  function subtractButton() {
    const quantityCounter = document.getElementById("span-count");
    if (counter > 0) {
      counter--;
      quantityCounter.innerText = counter;
    }
  }

  function sumButton() {
    const quantityCounter = document.getElementById("span-count");
    if (counter < 3) {
      counter++;
      quantityCounter.innerText = counter;
    }
  }
  return El({
    element: "div",
    className: "flex mt-[30px] mb-[60px] mx-[24px]",
    children: [
      El({
        element: "div",
        className: "font-bold",
        innerText: "Quantity",
      }),
      El({
        element: "div",
        className: "bg-gray-200 ml-[60px] flex gap-4 px-4 rounded-2xl",
        children: [
          El({
            element: "span",
            className: "font-bold",
            id: "span-subtract",
            onclick: subtractButton,

            innerText: "-",
          }),
          El({
            element: "span",
            className: "font-bold",
            id: "span-count",
            innerText: "0",
          }),
          El({
            element: "span",
            className: "font-bold",
            id: "span-sum",
            onclick: sumButton,
            innerText: "+",
          }),
        ],
      }),
    ],
  });
}
