import { El } from "../../../utils/create-element";
import { setLocalStorage } from "../../../utils/localStorage";
import { renderData } from "../renderData/renderData";

export function titleSearch() {
  function clearData() {

    setLocalStorage("recentSearch", [] );
    const searchDataComment = document.getElementById("searchDataComment");
    searchDataComment.innerHTML = "";
    searchDataComment.append(...renderData());
  }

  return El({
    element: "div",
    id: "parentTitle",
    children: [
      El({
        element: "div",
        className: "flex justify-between items-center mx-[24px] mt-[19px]",
        children: [
          El({
            element: "span",
            className: "font-bold",
            innerText: "Recent",
          }),
          El({
            element: "span",
            className: "font-semibold cursor-pointer",
            innerText: "Clear All",
            onclick: clearData,
          }),
        ],
      }),
      El({
        element: "hr",
        className: " m-[24px]",
      }),
    ],
  });
}
