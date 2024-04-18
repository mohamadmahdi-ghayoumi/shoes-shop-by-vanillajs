import { El } from "../../../utils/create-element";
import { getLocalStorage, setLocalStorage } from "../../../utils/localStorage";
import { renderData } from "../renderData/renderData";

export function oneData(name) {
  
  function deleteData(e) {
    const nameData = e.target.closest("#parent-data").children[0].innerText;
    const datas = getLocalStorage("recentSearch");
    const datanew = datas.filter((item) => item !== nameData);
    console.log(datanew);

    setLocalStorage("recentSearch", datanew);

    const searchDataComment = document.getElementById("searchDataComment");
    searchDataComment.innerHTML = "";
    searchDataComment.append(...renderData());
  }

  return El({
    element: "div",
    className: "flex justify-between mx-[24px] my-4",
    id: "parent-data",
    children: [
      El({
        element: "div",
        className: "text-gray-600 font-medium",
        innerText: name,
      }),
      El({
        element: "span",
        className: "icon-[solar--close-square-linear] cursor-pointer",
        onclick: deleteData,
      }),
    ],
  });
}
