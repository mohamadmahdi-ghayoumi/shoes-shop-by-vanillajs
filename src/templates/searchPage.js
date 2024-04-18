import { HeaderSearchApi } from "../components/Search/HeaderSearchApi/HeaderSearchApi";
import { InputSearch } from "../components/Search/InputSearch/InputSearch";
import { NotFoundPage } from "../components/Search/NotFoundPage/NotFoundPage";
import { RenderData } from "../components/Search/RenderData/RenderData";

import { TitleSearch } from "../components/Search/TitleSearch/TitleSearch";
import { El } from "../utils/create-element";
// import { getLocalStorage } from "../utils/localStorage";

export function searchPage() {
  // const localRecentSearch = getLocalStorage("recentSearch")

  return El({
    element: "div",
    className: "",
    children: [
      InputSearch(),
      HeaderSearchApi(),
      TitleSearch(),
      El({
        element: "div",
        className: "",
        id: "searchDataComment",
        children: [...RenderData()],
      }),
      El({
        element: "div",
        className:
          "flex flex-wrap gap-[6px] m-[24px] mb-[80px] justify-center  items-center",
        id: "cardsProduct",
        children: [],
      }),
      NotFoundPage(),
    ],
  });
}
