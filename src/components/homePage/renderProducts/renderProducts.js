import { getProducts } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { cartproduct } from "../../cartproduct/cartproduct";
// import { productcarts } from "../widget/productcarts";

export function home(filter) {
  if (!filter) {
    filter = "all";
  }
  // console.log(filter)
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] m-[24px] mb-[80px] justify-center items-center",
    id: "render",
    children: [],
  });
  getProducts(filter).then((carts) => {
    // console.log(carts)
    carts.map((product) => {
      const productCard = cartproduct({ product });
      Element.append(productCard);
    });
  });
  console.log(Element);
  return Element;
}
