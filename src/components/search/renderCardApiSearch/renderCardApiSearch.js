import { getProductsSearch } from "../../../api/get/getProducts";
import { cardForWishlistPage } from "../../wishlist/cardForWishlistPage/cardForWishlistPage";

export function renderCardApiSearch() {
  const searchInput = document.getElementById("inputSearch").value;
  const cardsProduct = document.getElementById("cardsProduct");
  const notfoundpage = document.getElementById("notfoundpage");

  cardsProduct.innerHTML = "";
  getProductsSearch(searchInput).then((data) => {
    // const dataFilter = data.filter((item) => item.brand == searchInput);
    // const dataFilter = data.filter((item) => (item.name).includes(searchInput));
    const cardsProduct = document.getElementById("cardsProduct");

    data.map((product) => {
      const cardSearch = cardForWishlistPage({ product });
      return cardsProduct.append(cardSearch);
    });

    if (Object.prototype.hasOwnProperty.call(data, "length")) {
      console.log(data.length);
      const countData = document.getElementById("countData");
      countData.innerText = `${data.length} found`;
      if (data.length == 0) {
        notfoundpage.classList.remove("hidden");
        console.log(data.length);

        console.log("0");
      } else if (data.length != 0) {
        console.log(data.length);

        notfoundpage.classList.add("hidden");
      }
    }
    // console.log(data);
    const valueInput = document.getElementById("valueInput");
    valueInput.innerText = `"${searchInput}"`;

    const parentTitle = document.getElementById("parentTitle");
    const searchDataComment = document.getElementById("searchDataComment");
    const headerSearchApi = document.getElementById("headerSearchApi");
    if (searchInput == "") {
      const cardsProduct = document.getElementById("cardsProduct");
      cardsProduct.innerHTML = "";
      searchDataComment.classList.remove("hidden");
      parentTitle.classList.remove("hidden");
      headerSearchApi.classList.add("hidden");
    } else {
      searchDataComment.classList.add("hidden");
      parentTitle.classList.add("hidden");
      headerSearchApi.classList.remove("hidden");
    }
  });
}
