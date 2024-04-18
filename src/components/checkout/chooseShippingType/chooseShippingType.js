import { El } from "../../../utils/create-element";
import { getLocalStorage } from "../../../utils/localStorage";

export function ChooseShippingType() {
  const shipping = getLocalStorage("shipping");
  // if (shipping.price == 0) {
  //   document.getElementById("parentShipping").classList.add("hidden");
  // }
  function goToShipping() {
    window.location.href = "/chooseshipping";
  }

  return El({
    element: "div",
    id: "",
    className: "mx-[24px] flex flex-col gap-4",
    children: [
      El({
        element: "div",
        className: "",
        children: [
          El({
            element: "p",
            className: "mb-[35px] font-bold text-[25px]",
            innerText: "Choose Shipping",
          }),
          El({
            element: "div",
            className: `flex gap-10 items-center ml-5 justify-between ${shipping.iconBack} `,
            children: [
              El({
                element: "div",
                className: " flex justify-between items-center gap-6",
                children: [
                  El({
                    element: "span",
                    className: "icon-[mdi--local-shipping] w-7 h-7",
                  }),
                  El({
                    element: "p",
                    className: "text-[20px] font-bold",
                    innerText: "Choose Shipping Type",
                  }),
                ],
              }),
              El({
                onclick: goToShipping,
                element: "span",
                className: `icon-[ooui--next-ltr] w-7 h-7 cursor-pointer`,
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        id: "parentShipping",
        className: `${shipping.parent}`,
        children: [
          El({
            element: "div",
            className: "flex items-center justify-between ",
            children: [
              El({
                element: "div",
                className: "flex gap-3",
                children: [
                  El({
                    element: "div",
                    className:
                      "bg-black rounded-full px-3 py-2 flex items-center justify-center",
                    children: [
                      El({
                        element: "span",
                        className: `${shipping.icon} w-[40px] h-[40px] m-auto  `,
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
                        id: "nameShipping",
                        innerText: shipping.name,
                      }),
                      El({
                        element: "div",
                        className: "text-[14px] whitespace-nowrap",
                        id: "addressLocation",
                        innerText: shipping.address,
                      }),
                    ],
                  }),
                ],
              }),

              El({
                element: "div",
                className: "flex items-center gap-2",
                children: [
                  El({
                    element: "span",
                    className: "font-bold text-[25px]",
                    innerText: `$${shipping.price}`,
                  }),

                  El({
                    element: "span",
                    onclick: goToShipping,
                    className: "icon-[eva--edit-2-fill] w-7 h-7 cursor-pointer",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
