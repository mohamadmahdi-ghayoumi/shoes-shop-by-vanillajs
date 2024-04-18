import { El } from "../utils/create-element";
import { footerHomePage } from "./footer/footerHomePage";
import { headerHomePage } from "./header/header-homepage";

export function LayoutHome(main) {
  return El({
    element: "div",
    className: "",
    children: [
        headerHomePage(),
        El({
        element: "main",
        className: "container mx-auto",
        children: [main],
      }),
      footerHomePage(
        "hidden",
        "icon-[ion--home-sharp]",
        "icon-[bi--bag]",
        " icon-[cil--cart]"
      ),
    ],
  });
}
