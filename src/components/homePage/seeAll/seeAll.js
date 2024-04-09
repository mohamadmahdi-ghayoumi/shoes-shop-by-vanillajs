import { El } from "../../../utils/create-element";

export function seeAll() {
function goPageSeeAll(){
    window.location.href = "/shoes-mostpopular";
}

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
            onclick: goPageSeeAll,
            innerText: "See All",
          }),
        ],
      }),
    ],
  });
}
