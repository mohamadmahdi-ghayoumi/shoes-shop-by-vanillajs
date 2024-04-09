import {  renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function homeAdidas() {
  
  const elemenet =  El({
    
    element: "div",
    className: "",
    children: [
        headerBack("Adidas"),


      renderProducts("adidas"),
    ],
  });

  return elemenet
}
