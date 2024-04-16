import { El } from "../../../utils/create-element";

export function swiperCard({ product }) {
  return El({
    element: "div",
    className: "",
    children: [
      El({
        element: "div",
        className: "flex justify-center items-cemter",
        children: [
          El({
            element: "img",
            className: "w-[428px]",
            src: product.imageURL,
          }),
        ],
      }),
    ],
  });
}
