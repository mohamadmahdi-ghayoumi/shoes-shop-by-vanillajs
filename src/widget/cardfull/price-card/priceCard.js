import { El } from "../../../utils/create-element";

export function priceCard() {
  return El({
    element: "div",
    className: "flex gap-[40px] mx-[24px]",
    children: [
      El({
        element: "div",
        className: "",
        children: [
          El({
            element: "div",
            className: "text-gray-500 text-[10px]",
            innerText: "Total price",
          }),
          El({
            element: "div",
            className: "font-bold text-[20px]",
            innerText: "$240.000",
          }),
        ],
      }),
      El({
        element: "button",
        className:
          "bg-black text-white w-full rounded-3xl relative text-[14px]",
        innerText: "Add to Card",
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
