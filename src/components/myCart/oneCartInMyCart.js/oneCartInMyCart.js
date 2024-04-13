import { El } from "../../../utils/create-element";
import { Link } from "../../homePage/link/link";

export function oneCartInMyCart({ product }) {
  const { name, price, imageURL, id, colors, sizes } = product;
  console.log(product);
  let color = "";
  switch (colors) {
    case "bg-red-500":
      color = "red";
      break;
  }

  return El({
    element: "div",
    className: " h-[130px]  mt-[24px]  flex gap-3 w-full ",
    children: [
      Link({
        href: `/products/${id}`,
        children: [  El({
        element: "img",
        className: "rounded-2xl  w-[130px]",
        src: imageURL,
      })]}),
    
      El({
        element: "div",
        className: "flex flex-col justify-between relative ",
        children: [
          El({
            element: "p",
            className:
              "font-semibold  text-[20px] whitespace-nowrap overflow-hidden overflow-ellipsis w-[150px] ",
            innerText: name,
          }),
          El({
            element: "div",
            className: "flex gap-4 ",
            children: [
              El({
                element: "div",
                className: `w-6 ${colors} rounded-full`,
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
                innerText: "size",
              }),
              El({
                element: "div",
                className: "",
                innerText: sizes,
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between items-center",
            children: [
              El({
                element: "p",
                className: "font-semibold text-[25px]",
                innerText: `$ ${price}`,
              }),
              El({
                element: "div",
                className: "bg-gray-200 ml-[60px] flex gap-4 px-4 rounded-2xl",
                children: [
                  El({
                    element: "span",
                    className: "font-bold",
                    id: "span-subtract",
                    // onclick: subtractButton,

                    innerText: "-",
                  }),
                  El({
                    element: "span",
                    className: "font-bold",
                    id: "span-countCart",
                    innerText: "0",
                  }),
                  El({
                    element: "span",
                    className: "font-bold",
                    id: "span-sum",
                    // onclick: sumButton,
                    innerText: "+",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "span",
            className:
              "icon-[ant-design--delete-outlined] absolute top-2 end-2 w-5 h-5",
          }),
        ],
      }),
    ],
  });
}
