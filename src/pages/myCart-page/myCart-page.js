import { LayoutMyCart } from "../../layout/layoutMyCart";
import { myCart } from "../../templates/myCart";
import { El } from "../../utils/create-element";


export function myCartPage() {
  return El({
    element: "div",
    className: "",
    children: [LayoutMyCart(myCart())],
  });
}
