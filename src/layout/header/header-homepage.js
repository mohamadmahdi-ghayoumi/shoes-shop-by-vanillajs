import { El } from "../../utils/create-element";

export function headerHomePage() {
  const elemente = El({
    element: "div",
    className: "h-[80px] w-[428px] flex pl-[24px] justify-between items-center",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-[16px] ",
        children: [
          El({
            element: "img",
            className: "w-[48px] h-[48px] rounded-full",

            src: "./src/assets/image/profile.jpg",
          }),
          El({
            element: "div",
            className: "flex flex-col",
            children: [
              El({
                element: "span",
                className: "text-gray-400 font-semibold",
                innerText: "Good Morning 👋",
              }),
              El({
                element: "span",
                className: "font-bold text-xl",
                innerText: "Mhmd ghayoumi",
              }),
            ],
          }),
        ],
      }),

      El({
        element: "div",
        className:
          "flex gap-[15px] items-center mr-[24px] justify-center text-center m-auto ",
        children: [
          El({
            element: "span",
            className:
              "icon-[fluent-mdl2--ringer] w-[24px] h-[22px] m-auto mb-[6px]",
          }),
          El({
            element: "a",
            className: "",
            href: "./wishlistpage",
            children: [
              El({
                element: "span",
                className: "icon-[ph--heart-light] w-[24px] h-[24px] m-auto",
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return elemente;
}
