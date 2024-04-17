import { RenderProducts } from "../../components/Home/RenderProducts/RenderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeNike() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("nike"), RenderProducts("nike")],
  });

  return elemenet;
}
