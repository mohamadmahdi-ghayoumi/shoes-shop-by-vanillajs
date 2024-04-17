import { getProducts } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { CartProduct } from "../CartProduct/CartProduct";
// import { productcarts } from "../widget/productcarts";

export function RenderProducts(filter) {
  if (!filter) {
    filter = "all";
  }
  // console.log(filter)
  const Element = El({
    element: "div",
    className:
      "flex flex-wrap gap-[6px] mx-[24px] mb-[100px]  justify-center items-center",
    id: "render",
  });
  getProducts(filter).then((carts) => {
    carts.map((product) => {
      const productCard = CartProduct({ product });
      Element.append(productCard);
    });
  });
  // console.log(Element)

  return Element;
}
