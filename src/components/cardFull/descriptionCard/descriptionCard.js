import { El } from "../../../utils/create-element";

export function descriptionCard() {
  return El({
    element: "div",
    className: "mx-[24px]",
    children: [
      El({
        element: "div",
        className: "flex items-center mt-2 mb-6",
        children: [
          El({
            element: "div",
            className:
              "bg-gray-300 px-[10px] p-[2px] rounded-xl  mr-[20px] text-[10px]",
            innerText: "5.371 sold",
          }),
          El({
            element: "span",
            className: "icon-[clarity--half-star-solid] w-[20px] h-[20px] ",
          }),
          El({
            element: "p",
            className: "text-gray-700 ml-[10px] font-semibold  text-[10px]",
            innerText: "4.3 (5,389 reviews)",
          }),
        ],
      }),
      El({
        element: "hr",
        className: "",
      }),
      El({
        element: "p",
        className: "text-[15px] font-bold mt-2 mb-2",
        innerText: "Description",
      }),
      El({
        element: "p",
        className: " text-gray-600",
        innerText:
          " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      }),
    ],
  });
}
