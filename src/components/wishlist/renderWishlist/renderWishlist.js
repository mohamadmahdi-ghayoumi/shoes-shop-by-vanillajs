import { getWishlistProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { CardForWishlistPage } from "../CardForWishlistPage/CardForWishlistPage";
// import { productcarts } from "../widget/productcarts";

export function RenderWishlist(filter) {
  if (!filter) {
    filter = "all";
  }
  // console.log(filter)
  const Element = El({
    element: "div",
    className: "grid grid-cols-2 gap-[6px] m-[24px] mb-[80px] justify-start ",
    id: "render",
  });

  getWishlistProduct(filter).then((carts) => {
    carts.map((product) => {
      const productCard = CardForWishlistPage({ product });
      Element.append(productCard);
    });
  });

  return Element;
}
