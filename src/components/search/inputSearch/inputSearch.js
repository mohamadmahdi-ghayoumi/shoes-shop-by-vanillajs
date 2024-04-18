import { debounce } from "lodash";
import { El } from "../../../utils/create-element";
import { getLocalStorage, setLocalStorage } from "../../../utils/localStorage";
import { RenderData } from "../RenderData/RenderData";
import { RenderCardApiSearch } from "../RenderCardApiSearch/RenderCardApiSearch";

export function InputSearch() {
  function searchInput() {
    const searchInput = document.getElementById("inputSearch").value;

    if (searchInput == "") {
      const searchDataComment = document.getElementById("searchDataComment");
      searchDataComment.innerHTML = "";
      searchDataComment.append(...RenderData());
      RenderCardApiSearch();
    } else if (searchInput) {
      setLocalStorage("recentSearch", [
        searchInput,
        ...getLocalStorage("recentSearch"),
      ]);

      // ...["Dfsdf" , "edfew"] => "Dfsdf" , "edfew" + "123" => ["Dfsdf" , "edfew" + "123"]
      RenderData();
      RenderCardApiSearch();
    }

    // if (searchInput != null) {
    //   setLocalStorage("recentSearch", [
    //     searchInput,
    //     ...getLocalStorage("recentSearch"),
    //   ]);
    //   console.log("por");

    //   renderData();
    //   renderCardApiSearch();
    // } else {
    //   console.log("khali");
    //   renderCardApiSearch();
    // }
  }

  return El({
    element: "div",
    className: "",
    children: [
      El({
        element: "div",
        className: "relative",
        children: [
          El({
            element: "input",
            className:
              " w-[380px] m-auto ml-[30px] h-[40px] mt-[16px] pl-[28px] bg-gray-100 rounded-xl",
            placeholder: "Search",
            id: "inputSearch",

            eventListener: [
              {
                event: "input",
                callback: debounce(searchInput, 1000),
              },
            ],
          }),
          El({
            element: "span",
            className:
              "icon-[iconamoon--search-thin] absolute top-[29px] w-[16px] h-[16px] start-[37px]",
          }),
          El({
            element: "span",
            className:
              "icon-[mage--filter-fill] absolute top-[29px] w-[16px] h-[16px] end-[37px] text-black",
          }),
        ],
      }),
    ],
  });
}
