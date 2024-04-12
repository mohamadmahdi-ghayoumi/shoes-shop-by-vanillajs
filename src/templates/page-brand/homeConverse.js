import { renderProducts } from "../../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeConverse() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("Converse"), renderProducts("converse")],
  });

  return elemenet;
}
