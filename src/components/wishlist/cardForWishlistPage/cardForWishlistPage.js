import { El } from "../../../utils/create-element";
import { Link } from "../../homePage/link/link";

export function cardForWishlistPage({ product }) {
  const { name, price, imageURL, id } = product;

  return Link({
    href: `/products/${id}`,
    children: [
      El({
        element: "div",
        className: "w-[182px] h-[244px] m-auto mt-[24px]",
        children: [
          El({
            element: "div",
            className: "relative",
            children: [
              El({
                element: "div",
                className:
                  "rounded-2xl h-[182px] w-[182px] relative",
                src: imageURL,
              }),
              El({
                element: "div",
                className:
                  " absolute bg-black top-1 end-2 w-[40px] h-[40px] rounded-full ",
              }),
              El({
                element: "img",
                className: " absolute  top-1 end-2 bg-white",
                src: "./src/assets/image/Vector.svg",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "font-bold mt-[12px] mb-[8px] whitespace-nowrap overflow-hidden overflow-ellipsis",
            innerText: name,
          }),
          El({
            element: "div",
            className: "flex items-center mt-1 mb-1",
            children: [
              El({
                element: "span",
                className: "icon-[clarity--half-star-solid] w-[15px] h-[15px] ",
              }),
              El({
                element: "p",
                className:
                  "text-gray-700 mx-[10px] font-semibold text-gray-700 text-[10px]",
                innerText: "4.3  |",
              }),
              El({
                element: "div",
                className:
                  "bg-gray-200 px-[10px] p-[2px] rounded-xl  mr-[20px] text-[10px]",
                innerText: "5.371 sold",
              }),
            ],
          }),
          El({
            element: "div",
            className: "font-medium",
            innerText: `$ ${price}`,
          }),
        ],
      }),
    ],
  });
}
