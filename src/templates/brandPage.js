import { renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";
import { brandchange } from "./test-card";

export function brandPage(brand) {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack(brand , "icon-[iconamoon--search-thin]"), brandchange(brand)],
  });

  return elemenet;
}
