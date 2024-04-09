import { renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function homeReebok() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [headerBack("Reebok"), renderProducts("reebok")],
  });

  return elemenet;
}
