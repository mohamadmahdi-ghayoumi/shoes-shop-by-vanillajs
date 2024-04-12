import { renderProducts } from "../../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function homeAsics() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("Asics"), renderProducts("asics")],
  });

  return elemenet;
}
