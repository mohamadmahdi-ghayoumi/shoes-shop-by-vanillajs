import { RenderProducts } from "../../components/Home/RenderProducts/RenderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeAdidas() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("Adidas"), RenderProducts("adidas")],
  });

  return elemenet;
}
