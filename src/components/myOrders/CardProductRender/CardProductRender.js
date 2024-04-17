import { getOrderProduct } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { OneCardCompleted } from "../OneCardCompleted/OneCardCompleted";

export function CardProductRender() {
  const Element = El({
    element: "div",
    className: "",
    children: [],
  });

  getOrderProduct().then((data) => {
    console.log(data);
    data.map((product) => {
      const productCard = OneCardCompleted(product);
      Element.append(productCard);
    });
  });

  return Element;
}
