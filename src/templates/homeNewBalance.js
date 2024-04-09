import {  renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function homeNewBalance() {
  
  const elemenet =  El({
    
    element: "div",
    className: "",
    children: [
        headerBack("New Balance"),

      renderProducts("new balance"),
    ],
  });

  return elemenet
}
