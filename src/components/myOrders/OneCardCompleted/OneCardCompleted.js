import { El } from "../../../utils/create-element";

export function OneCardCompleted(product) {
  let color = "";
  switch (product.colors) {
    case "bg-red-500":
      color = "red";
      break;
    case "bg-blue-500":
      color = "blue";
      break;
    case "bg-[#1a1a1a]":
      color = "black";
      break;
    case "bg-yellow-700":
      color = "brown";
      break;
    case "bg-white-500":
      color = "white";
      break;
  }

  const Element = El({
    element: "div",
    value: "value",
    className: "h-[150px] mt-10 flex gap-4 cart w-[426px] justify-center ",
    id: "parentcartt",
    children: [
      El({
        element: "img",
        className: "rounded-2xl w-[130px]",
        src: product.imageURL,
      }),

      El({
        element: "div",
        className: "flex flex-col justify-between items-start   ",
        children: [
          El({
            element: "p",
            id: "id",
            className: "font-bold text-[20px] truncate w-[200px] ",
            innerText: product.name,
          }),
          //whitespace-nowrap overflow-hidden overflow-ellipsis
          El({
            element: "div",
            className: "flex gap-2",
            children: [
              El({
                element: "div",
                className: `w-5 h-5 m-auto  ${product.colors} rounded-full`,
                innerText: "",
              }),

              El({
                element: "div",
                className: "",
                innerText: color,
              }),
              El({
                element: "div",
                className: "",
                innerText: "|",
              }),
              El({
                element: "div",
                className: "",
                innerText: "Size =",
              }),
              El({
                element: "div",
                className: "",
                innerText: product.sizes,
              }),
              El({
                element: "div",
                className: "",
                innerText: "|",
              }),
              El({
                element: "div",
                className: "",
                innerText: "Qty =",
              }),
              El({
                element: "div",
                className: "",
                innerText: product.quantity,
              }),
            ],
          }),
          El({
            element: "div",
            className: "px-3 py-1 bg-gray-200 rounded text-sm",
            innerText: "Completed",
          }),
          El({
            element: "div",
            className: "flex items-center text-center justify-center ",
            children: [
              El({
                element: "p",
                className: "font-semibold text-[25px]",
                innerText: `$${product.totalPrice}`,
              }),
              El({
                element: "div",
                className:
                  "bg-black ml-[60px] flex py-2 px-6 rounded-2xl text-white whitespace-nowrap",
                children: [
                  El({
                    element: "span",
                    className: "font-semibold text-sm countCart",
                    innerText: "Leave Review",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return Element;
}
