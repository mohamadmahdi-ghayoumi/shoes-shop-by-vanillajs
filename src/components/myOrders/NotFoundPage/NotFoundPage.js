import { El } from "../../../utils/create-element";

export function NotFoundCard() {
  return El({
    element: "div",
    id: "notFoundCard",
    className:
      "flex flex-col justify-center items-center m-auto content-center mt-36",
    children: [
      El({
        element: "img",
        className: "w-[300px]",
        src: "src/assets/image/notfound.png",
      }),
      El({
        element: "span",
        className: "font-bold text-[25px]",
        innerText: "You don't have an order yet ",
      }),
      El({
        element: "span",
        className: " text-[24px] mx-[30px] text-center text-gray-600 mt-5",
        innerText: "You don't have an active orders at this time",
      }),
    ],
  });
}
