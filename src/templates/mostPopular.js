import { RenderProducts } from "../components/homePage/RenderProducts/RenderProducts";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";
import { MarginButtons } from "../components/homePage/MarginButtons/MarginButtons";

export function mostPopular() {
  const elemenet = El({
    element: "div",
    className: "",
    children: [
      headerBack("Most Popular"),
      MarginButtons(),
      El({
        element: "div",
        id: "home",
        children: [RenderProducts("all")],
      }),
    ],
  });
  return elemenet;
}
