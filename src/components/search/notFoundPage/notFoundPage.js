import { El } from "../../../utils/create-element";

export function notFoundPage() {
  return El({
    element: "div",
    id : "notfoundpage",
    className: "flex flex-col justify-center items-center hidden",
    children: [
      El({
        element: "img",
        className: "",
        src: "src/assets/image/notfound.png",
      }),
      El({
        element: "span",
        className: "font-bold text-[25px]",
        innerText: "Not Found ",
      }),
      El({
        element: "span",
        className: " text-[24px] mx-[30px] text-center text-gray-600 mt-5",
        innerText: "Sorru, the keyword you entered cannot be found,please check again or search with another keyword",
      }),
    ],
  });
}
