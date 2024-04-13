import { El } from "../../../utils/create-element";

export function modalDelete() {
  return El({
    element: "div",
    id: "modalDelete",
    className:
      "absolute bottom-0 w-full h-[400px] bg-gray-400 rounded-t-[70px]  p-2 flex flex-col pt-[50px] gap-[60px] items-center hidden",
    children: [
      El({
        element: "div",
        className: "text-[25px] font-bold",
        innerText: "Remove From Cart",
      }),
      El({
        element: "div",
        className: " h-[130px]    flex gap-3 w-full justify-center ",
        children: [
          El({
            element: "img",
            className: "rounded-2xl  w-[130px]",
            id: "imageModal",
            src: "imageURL",
          }),

          El({
            element: "div",
            className: "flex flex-col justify-between relative ",
            children: [
              El({
                element: "p",
                className:
                  "font-semibold  text-[20px] whitespace-nowrap overflow-hidden overflow-ellipsis w-[130px] ",
                id: "nameModal",

                innerText: "name",
              }),
              El({
                element: "div",
                className: "flex gap-4 ",
                children: [
                  El({
                    element: "div",
                    id: "bgColorModal",

                    className: `w-6 ${"colors"} rounded-full`,
                    innerText: "",
                  }),

                  El({
                    element: "div",
                    className: "",
                    id: "colorModal",

                    innerText: "color",
                  }),
                  El({
                    element: "div",
                    className: "",
                    innerText: "|",
                  }),
                  El({
                    element: "div",
                    className: "",
                    innerText: "size",
                  }),
                  El({
                    element: "div",
                    className: "",
                    id: "sizeModal",
                    innerText: "sizes",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-between items-center",
                children: [
                  El({
                    element: "p",
                    className: "font-semibold text-[25px]",
                    id: "priceModal",

                    innerText: `$ ${"price"}`,
                  }),
                  El({
                    element: "div",
                    className:
                      "bg-gray-200 ml-[40px] flex gap-4 px-2 rounded-2xl",
                    children: [
                      El({
                        element: "span",
                        className: "font-bold",
                        id: "span-subtract",
                        // addEvenListener: [
                        //   {
                        //     event: "onclick",
                        //     callback: (e) => subtractBtn(e),
                        //   },
                        // ],

                        innerText: "-",
                      }),
                      El({
                        element: "span",
                        className: "font-bold countCart",
                        id: "imageModal",

                        id: "quantityModal",
                        innerText: "quantity",
                      }),
                      El({
                        element: "span",
                        className: "font-bold",
                        id: "span-sum",
                        // onclick: sumBtn,
                        innerText: "+",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-center items-center w-[80%] gap-2",
        children: [
          El({
            element: "button",
            className:
              "hover:text-white hover:bg-black rounded-3xl bg-gray-200 w-[50%] text-[14px] h-[40px]",
            innerText: "cancel",
          }),
          El({
            element: "button",
            className:
              "hover:text-white hover:bg-black rounded-3xl bg-gray-200 w-[50%] text-[14px] h-[40px]",
            innerText: "Yes, Remove",
          }),
        ],
      }),
    ],
  });
}