import { round } from "lodash";
import { getCardProductForOrder } from "../../api/get/getProducts";
import { El } from "../../utils/create-element";

export function footerHomePage(classname , iconHome ,iconCart ) {
  function goToCheckout() {
    window.location.href = "/checkout";
  }
  return El({
    element: "div",
    id: "footer",

    className: "flex flex-col fixed bottom-0 bg-white py-2 gap-4  ",
    children: [
      El({
        element: "div",
        className: `flex  mx-[24px] ${classname} `,
        children: [
          El({
            element: "div",
            className: "w-[35%]",
            children: [
              El({
                element: "p",
                className: "",
                innerText: "Total price",
              }),
              El({
                element: "div",
                className: "flex",
                children: [
                  El({
                    element: "p",
                    className: "font-bold text-[20px] ",
                    innerText: "$",
                  }),
                  El({
                    element: "p",
                    className: "font-bold text-[20px] ",
                    id: "priceMyCart",
                    innerText: "$ 22.000",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "button",
            className:
              "bg-black text-white w-[65%] rounded-3xl relative text-[14px]",
            innerText: "Add to Card",
            id: "btnAddToCard",
            onclick: goToCheckout,
            children: [
              El({
                element: "img",
                className:
                  " text-white absolute  w-[17px]  h-[17px] end-[60px] top-[20px] ",
                src: "src/assets/image/right.png",
              }),
            ],
          }),
        ],
      }),

      El({
        element: "div",
        className:
          "flex gap-[44px] w-[428px] h-[66px] items-center justify-center  ",
        children: [
          El({
            element: "div",
            className: "flex flex-col items-center",
            children: [
              El({
                element: "a",
                href: "./homepage",
                children: [
                  El({
                    element: "span",
                    className: `${iconHome} w-[24px] h-[24px]`,
                  }),
//home sefiiiiid icon-[clarity--home-line]
// meshki   icon-[ion--home-sharp]



                ],
              }),
              El({
                element: "span",
                className: "",
                innerText: "Home",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex flex-col  items-center",
            children: [
              
              
              El({
                element: "a",
                href: "./mycartpage",
                children: [
              El({
                element: "span",
                id: "iconCart",
                className:
                  ` ${iconCart} w-[24px] h-[24px]`,
              }),
            ]
          }),
// sefid    icon-[bi--bag]
              //meshkiii    icon-[bi--bag-fill]
             
                  El({
                    element: "span",
                    className: "",
                    innerText: "Cart",
                  }),
               
            ],
          }),

          El({
            element: "div",
            className: "flex flex-col items-center",
            children: [
              El({
                element: "a",
                href: "./",
                children: [
                  El({
                    element: "span",
                    className: "icon-[cil--cart] w-[24px] h-[24px]",
                  }),
                ],
              }),
              El({
                element: "span",
                className: "",
                innerText: "Orders",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex flex-col items-center",
            children: [
              El({
                element: "a",
                href: "./",
                children: [
                  El({
                    element: "span",
                    className: "icon-[bi--wallet2] w-[24px] h-[24px]",
                  }),
                ],
              }),
              El({
                element: "span",
                className: "",
                innerText: "Wallet",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex flex-col items-center",
            children: [
              El({
                element: "a",
                href: "./",
                children: [
                  El({
                    element: "span",
                    className:
                      "icon-[iconamoon--profile-light] w-[24px] h-[24px]",
                  }),
                ],
              }),
              El({
                element: "span",
                className: "",
                innerText: "Profile",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
