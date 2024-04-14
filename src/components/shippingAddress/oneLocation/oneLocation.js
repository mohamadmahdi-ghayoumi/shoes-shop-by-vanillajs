import { El } from "../../../utils/create-element";

export function oneLocation(name , address){
    return   El({
            element: "div",
            className: "flex gap-3 items-center justify-between",
            children: [
             El({
                element : "div",
                className : "flex gap-2", 
                children : [
                     El({
                    element: "div",
                    className:
                      "ml-7 bg-gray-300 rounded-full w-[60px] h-[60px] relative",
                    children: [
                      El({
                        element: "span",
                        className:
                          "icon-[el--map-marker-alt] w-[40px] h-[40px] m-auto absolute bottom-[10px] end-[10px]",
                      }),
                    ],
                  }),
    
                  El({
                    element: "div",
                    className: "mr-7 flex flex-col gap-3",
                    children: [
                      El({
                        element: "div",
                        className: "font-bold text-[20px]",
                        innerText: name,
                      }),
                      El({
                        element: "div",
                        className: "text-[14px] whitespace-nowrap",
                        innerText: address,
                      }),
                    ],
                  })]
             })
             
                ,
              El({
                element: "input",
                type: "radio",
                className: "checked:bg-black w-5 h-5",
              }),
            ],
          })
    
}