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
                className: "",
                innerText: "Good Morning 👋",
              }),
              El({
                element: "span",
                className: "",
                innerText: "Mohamadmahdi ghayoumi",
              }),
            ],
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex gap-[16px] items-center mx-[25px]",
        children: [
          El({
            element: "span",
            className: "icon-[iwwa--alarm] w-[22.5px] h-[24px]",
          }),
          El({
            element: "a",
            className: "",
            href: "./wishlistpage",
            children: [
              El({
                element: "span",
                className: "icon-[ph--heart-light] w-[24px] h-[24px]",
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return elemente;
}
