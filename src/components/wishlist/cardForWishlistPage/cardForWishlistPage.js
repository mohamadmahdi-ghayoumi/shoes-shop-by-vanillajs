import { El } from "../../../utils/create-element";
import { Link } from "../../homePage/link/link";

export function cardForWishlistPage({ product }) {
  const { name, price, imageURL, id } = product;
  console.log({ product });

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
                element: "img",
                className: "rounded-2xl h-[182px] w-[182px] relative",
                src: imageURL,
              }),
              El({
                element: "div",
                className:
                  "bg-gray-900 p-1 absolute top-3 right-5 rounded-full flex item-center justify-center",
                children: [
                  El({
                    element: "span",
                    className: "icon-[clarity--heart-solid] text-white ",
                  }),
                ],
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
