import { RenderProducts } from "../../components/homePage/RenderProducts/RenderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeAllBrands() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("All Brands"), RenderProducts()],
  });

  return elemenet;
}
