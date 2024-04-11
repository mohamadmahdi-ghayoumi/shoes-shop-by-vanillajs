import { getProductsWishlist } from "../../../api/get/getProducts";
import { getUser } from "../../../api/get/getUser";
import { addToWishlist } from "../../../api/post/postProduct";
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
  
  getUser(filter).then((carts) => {
    console.log(filter);
    console.log(carts[0].wishlist);
    let wishlist = carts[0].wishlist
    wishlist.map((product) => {
      const productCard = cartproduct({ product });
      Element.append(productCard);
    });
  });
  // console.log(Element)

  return Element;
}
