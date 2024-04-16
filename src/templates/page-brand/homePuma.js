import { RenderProducts } from "../../components/homePage/RenderProducts/RenderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homePuma() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("Puma"), RenderProducts("puma")],
  });

  return elemenet;
}
