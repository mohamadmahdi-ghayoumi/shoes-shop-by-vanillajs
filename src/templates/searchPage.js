import { headerSearchApi } from "../components/search/headerSearchApi/headerSearchApi";
import { inputSearch } from "../components/search/inputSearch/inputSearch";
import { renderData } from "../components/search/renderData/renderData";
// import { renderData } from "../components/search/renderData/renderData";
// import { recentData } from "../components/search/recentData/recentData";
import { titleSearch } from "../components/search/titleSearch/titleSearch";
import { El } from "../utils/create-element";
// import { getLocalStorage } from "../utils/localStorage";

export function searchPage() {
  // const localRecentSearch = getLocalStorage("recentSearch")
  return El({
    element: "div",
    className: "",
    children: [
      inputSearch(),
      headerSearchApi(),
      titleSearch(),
      El({
        element: "div",
        className: "",
        id: "searchDataComment",
        children: [...renderData()],
      }),
      El({
        element: "div",
        className:
          "flex flex-wrap gap-[6px] m-[24px] mb-[80px] justify-center  items-center",
        id: "cardsProduct",
        children: [],
      }),
    ],
  });
}
