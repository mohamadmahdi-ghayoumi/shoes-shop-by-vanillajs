import { El } from "../../utils/create-element";

export function footerHomePage() {
  return El({
    element: "div",
    className: "flex bg-white gap-[44px] w-[428px] h-[66px] items-center justify-center fixed bottom-0",
    children: [
      El({
        element: "div",
        className: "flex flex-col items-center",
        children: [
          El({
            element: "span",
            className: "icon-[ion--home-sharp] w-[24px] h-[24px]",
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
        className: "flex flex-col items-center",
        children: [
          El({
            element: "span",
            className: "icon-[bi--bag] w-[24px] h-[24px]",
          }),
          El({
            element: "span",
            className: "",
            innerText : "Cart"
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex flex-col items-center",
        children: [
          El({
            element: "span",
            className: "icon-[cil--cart] w-[24px] h-[24px]",
          }),
          El({
            element: "span",
            className : "",
            innerText: "Orders",
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex flex-col items-center",
        children: [
          El({
            element: "span",
            className: "icon-[bi--wallet2] w-[24px] h-[24px]",
          }),
          El({
            element: "span",
            className : "",
            innerText: "Wallet",
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex flex-col items-center",
        children: [
          El({
            element: "span",
            className: "icon-[iconamoon--profile-light] w-[24px] h-[24px]",
          }),
          El({
            element: "span",
            className : "",
            innerText: "Profile",
          }),
        ],
      }),
    ],
  });
}
