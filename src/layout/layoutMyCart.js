import { El } from "../utils/create-element";
import { footerHomePage } from "./footer/footerHomePage";
import { headerHomePage } from "./header/header-homepage";
import { headerMyCart } from "./header/headerMyCart";

export function LayoutMyCart(main) {
  return El({
    element: "div",
    className: "",
    children: [
        headerMyCart(),

        El({
        element: "main",
        className: "container mx-auto",
        children: [main],
      }),    
        footerHomePage(
        "hidden",
        "icon-[clarity--home-line]",
        "icon-[bi--bag-fill]",
        " icon-[cil--cart]"
      )
      
    ],
  });
}
