import { getWishlistProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { cardForWishlistPage } from "../cardForWishlistPage/cardForWishlistPage";
// import { productcarts } from "../widget/productcarts";

export function renderWishlist(filter) {
  if (!filter) {
    filter = "all";
  }
  // console.log(filter)
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px]  items-center  justify-center",
    id: "render",
  });

  getWishlistProduct(filter).then((carts) => {
    carts.map((product) => {
      const productCard = cardForWishlistPage({ product });
      Element.append(productCard);
    });
  });

  return Element;
}
