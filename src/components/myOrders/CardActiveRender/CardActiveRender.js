import { getCardProductForOrder } from "../../../api/get/getProducts";
import { El } from "../../../utils/create-element";
import { OneCardActive } from "../OneCardActive/OneCardActive";
import { NotFoundCard } from "../NotFoundPage/NotFoundPage";

export function CardActiveRender() {
  const Element = El({
    element: "div",
    className: "flex flex-col mb-28 ",
    children: [],
  });

  getCardProductForOrder().then((data) => {
console.log([...data].length)
    if([...data].length > 0){

         console.log(data);
    data.map((product) => {
      const productCard = OneCardActive(product);
      Element.append(productCard);
    });
    }else{

// const notFoundCard = document.getElementById("notFoundCard")
Element.append(NotFoundCard())
    }
 
  });

  return Element;
}