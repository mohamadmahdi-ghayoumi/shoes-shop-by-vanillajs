import { El } from "../../../utils/create-element";

export function favoriteCard(){
    return El({
        element : "div",
        className : "flex justify-between items-center mt-[10px] mx-[24px]",
        children : [El({
            element: "p",
            className: "font-bold text-[25px]",
            innerText: "Running Sportwear",
          }),
          El({
            element: "span",
            className: "icon-[ph--heart-light] w-[24px] h-[24px]",
          }),]
    })
}