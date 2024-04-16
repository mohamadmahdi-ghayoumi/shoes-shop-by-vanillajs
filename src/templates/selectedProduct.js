import { getProductById } from "../api/get/getProducts";
import { El } from "../utils/create-element";
import { cardFullDetail } from "./cardFullDetail/cardFullDetail";

export function Product(data) {
  const productId = data.id;
  getProductById(productId).then((product) => {
    element
      .querySelector("#product-details")
      .append(cardFullDetail({ product }));
 
  });
  const element = El({
    element: "div",
    children: [
      El({ element: "div", id: "product-details" }),
   
    ],
  });
  return element;
}
