import {  renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function homePuma() {
  
  const elemenet =  El({
    
    element: "div",
    className: "",
    children: [
        headerBack("Puma"),


      renderProducts("puma"),
    ],
  });

  return elemenet
}
