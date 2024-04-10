import { El } from "../utils/create-element";

export function ProductDetails({ product }) {
  return El({
    element: "div",
    className: "flex gap-5 justify-between mb-5",
    children: [
      El({
        element: "img",
        src: product.imageURL,
        width: 500,
      }),
      El({
        element: "div",
        children: [
          El({
            element: "h1",
            className: "text-2xl",
            innerText: product.name,
          }),
          El({
            element: "h3",
            innerText: product.brand,
          }),
        ],
      }),
      // BuySectionCard({ product }),
    ],
  });
}
