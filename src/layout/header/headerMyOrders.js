import { El } from "../../utils/create-element";

// import { log } from "console";
export function headerMyOrders() {
  return El({
    element: "div",
    innerText: "",
    className: "h-[56px] flex items-center mb-3 mt-[10px] justify-between",
    children: [
      El({
        element: "div",
        className: "flex ",
        children: [
          El({
            element: "img",
            className: " h-[25px] mx-[24px]  mt-[18px]",
            src: "src/assets/image/logo-login.png",
            eventListener: [
              {
                event: "click",
                callback: () => {
                  window.history.back();
                },
              },
            ],
          }),

          El({
            element: "div",
            className: "font-bold text-[24px] pr-[100px]  mt-[10px] ",
            innerText: "My Orders",
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex",
        children: [
          El({
            element: "a",
            href: "/searchpage",
            className: "",
            children: [
              El({
                element: "span",
                className: `w-[32px] h-[32px] icon-[iconamoon--search-thin] mt-[21px] mr-[24px]`,
              }),
              El({
                element: "span",
                className: `w-[32px] h-[32px] icon-[circum--circle-more] mt-[21px] mr-[24px]`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
