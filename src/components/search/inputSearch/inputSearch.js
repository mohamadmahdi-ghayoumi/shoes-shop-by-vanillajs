import { debounce } from "lodash";
import { El } from "../../../utils/create-element";
import { getLocalStorage, setLocalStorage } from "../../../utils/localStorage";
import { renderData } from "../renderData/renderData";
import { getProductsSearch } from "../../../api/get/getProducts";
import { cardForWishlistPage } from "../../wishlist/cardForWishlistPage/cardForWishlistPage";

export function inputSearch() {
  function searchInput() {
    const searchInput = document.getElementById("inputSearch").value;
    if (searchInput) {
      setLocalStorage("recentSearch", [
        searchInput,
        ...getLocalStorage("recentSearch"),
      ]);
      renderData();
      renderCardApiSearch();
    }
    else{
      renderCardApiSearch();

    }
  }

  function renderCardApiSearch() {
    const searchInput = document.getElementById("inputSearch").value;
const cardsProduct = document.getElementById("cardsProduct")
cardsProduct.innerHTML = ""
    getProductsSearch(searchInput).then((data) => {
      // console.log(data);
      // console.log(searchInput);
      // const dataFilter = data.filter((item) => item.brand == searchInput);
      // const dataFilter = data.filter((item) => (item.name).includes(searchInput));
      const cardsProduct = document.getElementById("cardsProduct");
      // console.log(dataFilter);
      // console.log(data);

      data.map((product) => {
        const cardSearch = cardForWishlistPage({ product });
        return cardsProduct.append(cardSearch);
      });
      const parentTitle = document.getElementById("parentTitle");
      const searchDataComment = document.getElementById("searchDataComment");
        console.log(searchInput);

      if (searchInput == "") {
        console.log("searchInput");

        searchDataComment.classList.remove("hidden");
        parentTitle.classList.remove("hidden");
      } else  {
        searchDataComment.classList.add("hidden");
        parentTitle.classList.add("hidden");
      }
    });
  }

  function test() {
    const inputSearch = document.getElementById("inputSearch");
    console.log(inputSearch?.value);
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
              " w-[380px] m-auto ml-[30px] h-[40px] mt-[16px] pl-[28px] bg-gray-200 rounded-xl",
            placeholder: "Search",
            id: "inputSearch",

            eventListener: [
              {
                event: "input",
                callback: debounce(searchInput, 1000),
                // callback: debounce(test, 1000),
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
