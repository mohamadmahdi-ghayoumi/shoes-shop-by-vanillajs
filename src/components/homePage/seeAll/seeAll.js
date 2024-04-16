import { El } from "../../../utils/create-element";

export function seeAll() {
  function goPageSeeAll() {
    window.location.href = "/shoes-mostpopular";
  }

  return El({
    element: "div",
    className: "mb-5",
    children: [
      El({
        element: "div",
        className: "flex justify-between items-center mx-[24px] mt-[19px]",
        children: [
          El({
            element: "span",
            className: "text-[20px] font-semibold",
            innerText: "Most Popular",
          }),
          El({
            element: "span",
            className: "font-semibold text-gl",
            onclick: goPageSeeAll,
            innerText: "See All",
          }),
        ],
      }),
    ],
  });
}
