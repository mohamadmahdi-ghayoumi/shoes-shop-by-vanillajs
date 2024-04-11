import { El } from "../../utils/create-element";
export function headerBack(name , icon) {
  return El({
    element: "div",
    innerText: "",
    className: "h-[56px] flex items-center mb-3",
    children: [
      El({
        element: "a",
        href: "/homepage",
        className: "",
        children: [
          El({
            element: "span",
            className:
              "w-[32px] h-[32px] mx-[24px] icon-[ic--sharp-arrow-back] mt-[21px]",
          }),
        ],
      }),
      El({
        element: "div",
        innerText: name,
        className: "font-bold text-[20px]  mt-[12px] ml-[0px]",
      }),
      El({
        element: "a",
        href: "/homepage",
        className: "",
        children: [
          El({
            element: "span",
            className:
              `w-[32px] h-[32px] mx-[24px] ${icon} mt-[21px] ml-[330px]`,
          }),
        ],
      }),
    ],
  });
}
