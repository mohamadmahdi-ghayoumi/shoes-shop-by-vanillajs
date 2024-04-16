import { RenderProducts } from "../../components/homePage/RenderProducts/RenderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeReebok() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("Reebok"), RenderProducts("reebok")],
  });

  return elemenet;
}
