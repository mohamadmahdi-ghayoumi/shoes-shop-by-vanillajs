import { El } from "../utils/create-element";
import { headerBack } from "./header/headerback";

export function LayoutCheckout(main) {
  return El({
    element: "div",
    className: "",
    children: [headerBack("Checkout", "icon-[circum--circle-more]"),El({
      element: "main",
      className: "container mx-auto",
      children: [main],
    }),],
  });
}
