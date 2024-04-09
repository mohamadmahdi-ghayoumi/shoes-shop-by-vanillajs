import { El } from "../../../utils/create-element";

export function searchBox(){
    return El({
        element : "div",
        children : [      El({
            element: "input",
            className: " w-[380px] m-auto ml-[30px] relative mt-[16px] pl-[28px]",
            placeholder: "Search",
          }),
          El({
            element: "span",
            className:
              "icon-[iconamoon--search-thin] absolute top-[100px] w-[16px] h-[16px] start-[37px]",
          }),]
    })
}