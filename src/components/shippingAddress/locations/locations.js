import { El } from "../../../utils/create-element";
import { oneLocation } from "../oneLocation/oneLocation";

export function locations(){


    return El({
        element : "div",
        className : "mx-[24px] flex flex-col  gap-10 mt-[50px]",
        children : [

            oneLocation("Home" ,"61480 Sunbrook Park PC 5679"),
            oneLocation("Office" ,"6993 Meadow Valley Terra. PC 3637"),

            oneLocation("Apartment" ,"21833 Clyde Gallagher. PC 4662"),

            oneLocation("Parent's House" ,"5259 Blue Bill Park. PC 4627"),
            El({
                element: "button",
                className:
                  "bg-gray-200  w-[90%] rounded-[60px] relative text-[20px] m-auto w-[60px] h-[60px]",
                innerText: "Checkout",
                id: "btnAddToCard",
                // onclick: addToOrders,
                children: [
                  El({
                    element: "img",
                    className:
                      " text-white absolute  w-[17px]  h-[17px] end-[100px] top-[23px] ",
                    src: "src/assets/image/right.png",
                  }),
                ],
              }),
              El({
                element: "button",
                className:
                  "bg-black text-white w-[90%] rounded-[60px] mt-[210px] relative text-[14px] m-auto h-[60px]",
                innerText: "Apply",
                children: [
                  El({
                    element: "img",
                    className:
                      " text-white absolute  w-[17px]  h-[17px] end-[100px] top-[23px] ",
                    src: "src/assets/image/right.png",
                  }),
                ],
              }),

        ]
    })

}