import { El } from "../../../utils/create-element";

export function cartproduct({ product }) {
  const { name, price, imageURL, id } = product;

  return El({
    element: "div",
    className: "w-[182px] h-[244px] m-auto mt-[24px]",
    children: [
      El({
        element: "img",
        src: imageURL,
        className: "rounded-2xl bg-gray-200 h-[182px] w-[182px]",
      }),
      El({
        element: "h2",
        className:
          "font-bold mt-[12px] mb-[8px] whitespace-nowrap overflow-hidden overflow-ellipsis",
        innerText: name,
      }),
      El({
        element: "span",
        className: "font-medium",
        innerText: `$ ${price}`,
      }),
    ],
  });
}
