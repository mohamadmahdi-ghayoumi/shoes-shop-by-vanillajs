import { El } from "../../../utils/create-element";
import { Link } from "../../../utils/link";

export function ImageButton({ src, brand, className }) {
  function btnBrand(e) {
    const brand = e.target.closest("#btn").children[1].innerText;

    switch (`${brand}`) {
      case "Asics":
        window.location.href = "shoes-asics";
        break;
      case "Converse":
        window.location.href = "shoes-converse";
        break;
    }
  }

  return Link({
    // href: `/brand/${brand.toLowerCase()}`,
    children: [
      El({
        element: "div",
        className: `flex flex-col  ${className} font-bold  w-[60px] h-[91px] cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis`,
        id: "btn",
        onclick: btnBrand,
        children: [
          El({
            element: "div",
            className:
              "bg-gray-200 w-[60px] hover:bg-gray-300 h-[60px] flex rounded-full",
            children: [
              El({
                element: "img",
                className: `   w-[60px] h-[25px] m-auto  `,
                src: src
              }),
            ],
          }),
          El({
            element: "span",
            className: "text-[14px]",
            innerText: `${brand}`,
          }),
        ],
      }),
    ],
  });
}
