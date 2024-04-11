import { getWishlistProduct } from "../../../api/get/getProducts";
import { getUser } from "../../../api/get/getUser";
import { addToWishlist } from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";
import { cartproduct } from "../../homePage/cartproduct/cartproduct";
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
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px] justify-center items-center",
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
