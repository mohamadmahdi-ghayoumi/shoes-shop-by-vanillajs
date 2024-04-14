import { El } from "../../../utils/create-element";

export function shippingAddress() {
  return El({
    element: "div",
    className: "mx-[24px]",
    children: [
      El({
        element: "div",
        className: "font-bold text-[25px] mb-[35px]",
        innerText: "Shipping Address",
      }),
      El({
        element: "div",
        className: "flex gap-3 items-center",
        children: [
          El({
            element: "div",
            className: "ml-7 bg-gray-300 rounded-full w-[80px] h-[80px] relative",
            children: [
              El({
                element: "span",
                className: "icon-[el--map-marker-alt] w-[60px] h-[60px] m-auto absolute bottom-[10px] end-[10px]",
              }),
            ],
          }),

          El({
            element: "div",
            className: "mr-7 flex flex-col gap-3",
            children: [
              El({
                element: "div",
                className: "font-bold text-[20px]",
                innerText: "Home",
              }),
              El({
                element: "div",
                className: "text-[14px] whitespace-nowrap",
                innerText: "61480 Sunbrook Park PC 5679",
              }),
            ],
          }),
          El({
            element: "span",
            className: "icon-[eva--edit-2-fill] w-8 h-8",
          }),
        ],
      }),
    ],
  });
}
