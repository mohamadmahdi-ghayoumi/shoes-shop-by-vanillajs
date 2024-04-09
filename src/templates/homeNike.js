import {  renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { El } from "../utils/create-element";

export function homeNike() {
  
  const elemenet =  El({
    
    element: "div",
    className: "",
    children: [
      El({
        element: "div",
        innerText: "",
        className: "h-[56px] flex items-center ",
        children: [
          El({
            element: "a",
            href: "/homepage",
            className: "",
            children: [
              El({
                element: "span",
                className:
                  "w-[32px] h-[32px] mx-[24px] icon-[ic--sharp-arrow-back] mt-[21px]",
              }),
            ],
          }),
          El({
            element: "div",
            innerText: "Nike",
            className: "font-bold text-[20px]  mt-[12px] ml-[0px]",
          }),
        ],
      }),

      renderProducts("nike"),
    ],
  });

  return elemenet
}
