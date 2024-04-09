import { El } from "../utils/create-element";
import { buttonsBrand } from "../widget/buttonsBrand";
import { footerHomePage } from "./footer/footerHomePage";
import { headerHomePage } from "./header/header-homepage";

export function layoutHomePage(main) {
  return El({
    element: "div",
    className: "",
    children: [headerHomePage(), main(), footerHomePage()],
  });
}
