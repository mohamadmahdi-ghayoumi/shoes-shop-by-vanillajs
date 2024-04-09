import { El } from "../../../utils/create-element";

export function quantityCard() {
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
            innerText: "-",
          }),
          El({
            element: "span",
            className: "font-bold",
            id: "span",
            innerText: "0",
          }),
          El({
            element: "span",
            className: "font-bold",
            innerText: "+",
          }),
        ],
      }),
    ],
  });
}
