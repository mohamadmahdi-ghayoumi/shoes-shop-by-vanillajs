import { RenderProducts } from "../../components/Home/RenderProducts/RenderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeAsics() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("Asics"), RenderProducts("asics")],
  });

  return elemenet;
}
