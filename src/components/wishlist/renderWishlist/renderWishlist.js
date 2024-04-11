import { getProductsWishlist } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { cartproduct } from "../../homePage/cartproduct/cartproduct";
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
  console.log(filter);

  getProductsWishlist(filter).then((carts) => {
    carts.map((product) => {
      const productCard = cartproduct({ product });
      Element.append(productCard);
    });
  });
  // console.log(Element)

  return Element;
}
