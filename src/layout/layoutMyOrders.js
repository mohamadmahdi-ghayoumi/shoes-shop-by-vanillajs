import { El } from "../utils/create-element";
import { footerHomePage } from "./footer/footerHomePage";
import { headerMyOrders } from "./header/headerMyOrders";

export function LayoutMyOrders(main) {
  return El({
    element: "div",
    className: "",
    children: [
      headerMyOrders(),
      El({
        element: "main",
        className: "container mx-auto",
        children: [main],
      }),
      footerHomePage(
        "hidden",
        "icon-[clarity--home-line]",
        "icon-[bi--bag]",
        "icon-[bi--cart-dash-fill]"
      ),
    ],
  });
}
