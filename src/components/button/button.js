import { El } from "../../utils/create-element";

export function buttonBrand({ logo, brand }) {
  return El({
    element: "div",
    className: "flex flex-col items-center justify-center w-[60px] h-[91px]",
    children: [
      El({
        element: "div",
        className: "bg-gray-200 w-[60px] hover:bg-gray-300 h-[60px] flex rounded-full",
        children: [
          El({
            element: "span",
            className: ` ${logo}  w-[60px] h-[25px] m-auto  `,
            src: "./src/assets/image/adidas1.png",
          }),
        ],
      }),
      El({
        element: "span",
        className: "text-[14px]",
        innerText: `${brand}`,
      }),
    ],
  });
}
