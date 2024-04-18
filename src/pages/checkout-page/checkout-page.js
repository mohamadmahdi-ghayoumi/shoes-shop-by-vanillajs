import { LayoutCheckout } from "../../layout/layoutCheckout";
import { checkout } from "../../templates/checkout/checkout";
import { El } from "../../utils/create-element";



export function checkoutPage() {
    return El({
      element: "div",
      className: "",
      children: [LayoutCheckout(checkout())],
    });
  }
  