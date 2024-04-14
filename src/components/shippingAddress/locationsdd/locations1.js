import { El } from "../../../utils/create-element";

export function locations1() {
  return El({
    element: "div",
    className: "flex flex-col justify-center",
    children: [
      El({
        element: "div",
        className: "mx-[24px] m-auto",
        children: [
          El({
            element: "div",
            className: "flex gap-3 items-center",
            children: [
              El({
                element: "div",
                className:
                  "ml-7 bg-gray-300 rounded-full w-[80px] h-[80px] relative",
                children: [
                  El({
                    element: "span",
                    className:
                      "icon-[el--map-marker-alt] w-[60px] h-[60px] m-auto absolute bottom-[10px] end-[10px]",
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
                    innerText: "Home",
                  }),
                  El({
                    element: "div",
                    className: "text-[14px] whitespace-nowrap",
                    innerText: "61480 Sunbrook Park PC 5679",
                  }),
                ],
              }),
              El({
                element: "input",
                type: "radio",
                className: "checked:bg-black w-5 h-5",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex gap-3 items-center",
            children: [
              El({
                element: "div",
                className:
                  "ml-7 bg-gray-300 rounded-full w-[80px] h-[80px] relative",
                children: [
                  El({
                    element: "span",
                    className:
                      "icon-[el--map-marker-alt] w-[60px] h-[60px] m-auto absolute bottom-[10px] end-[10px]",
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
                    innerText: "Office",
                  }),
                  El({
                    element: "div",
                    className: "text-[14px] whitespace-nowrap",
                    innerText: "6993 Meadow Valley Terra. PC 3637",
                  }),
                ],
              }),
              El({
                element: "input",
                type: "radio",
                className: "checked:bg-black w-5 h-5",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex gap-3 items-center",
            children: [
              El({
                element: "div",
                className:
                  "ml-7 bg-gray-300 rounded-full w-[80px] h-[80px] relative",
                children: [
                  El({
                    element: "span",
                    className:
                      "icon-[el--map-marker-alt] w-[60px] h-[60px] m-auto absolute bottom-[10px] end-[10px]",
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
                    innerText: "Apartment",
                  }),
                  El({
                    element: "div",
                    className: "text-[14px] whitespace-nowrap",
                    innerText: "21833 Clyde Gallagher. PC 4662",
                  }),
                ],
              }),
              El({
                element: "input",
                type: "radio",
                className: "checked:bg-black w-5 h-5",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex gap-3 items-center",
            children: [
              El({
                element: "div",
                className:
                  "ml-7 bg-gray-300 rounded-full w-[80px] h-[80px] relative",
                children: [
                  El({
                    element: "span",
                    className:
                      "icon-[el--map-marker-alt] w-[60px] h-[60px] m-auto absolute bottom-[10px] end-[10px]",
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
                    innerText: "Parent's House",
                  }),
                  El({
                    element: "div",
                    className: "text-[14px] whitespace-nowrap",
                    innerText: "5259 Blue Bill Park. PC 4627",
                  }),
                ],
              }),
              El({
                element: "input",
                type: "radio",
                className: "checked:bg-black w-5 h-5",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
