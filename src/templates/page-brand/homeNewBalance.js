import { RenderProducts } from "../../components/Home/RenderProducts/RenderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeNewBalance() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("New Balance"), RenderProducts("new balance")],
  });

  return elemenet;
}
