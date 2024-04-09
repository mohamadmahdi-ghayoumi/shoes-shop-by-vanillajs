import { El } from "../../../utils/create-element";

export function seeAll() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "flex justify-between items-center mx-[24px] mt-[19px]",
        children: [
          El({
            element: "span",
            className: "font-bold",
            innerText: "Most Popular",
          }),
          El({
            element: "span",
            className: "font-bold",
            innerText: "See All",
          }),
        ],
      }),
    ],
  });
}
