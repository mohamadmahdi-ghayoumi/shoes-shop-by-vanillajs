import { El } from "../../../utils/create-element";

export function ButtnAddToCard() {
  function goToCheckout() {
    window.location.href = "/checkout";
  }
  return El({
    element: "div",
    className: `flex  px-[24px] ablosute fixed bottom-20 py-3 w-full bg-white`,
    children: [
      El({
        element: "div",
        className: "w-[35%]",
        children: [
          El({
            element: "p",
            className: "",
            innerText: "Total price",
          }),
          El({
            element: "div",
            className: "flex",
            children: [
              El({
                element: "p",
                className: "font-bold text-[20px] ",
                innerText: "$",
              }),
              El({
                element: "p",
                className: "font-bold text-[20px] ",
                id: "priceMyCart",
                innerText: "$ 22.000",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "button",
        className:
          "bg-black text-white w-[65%] rounded-3xl relative hover:bg-gray-900 cursor-pointer text-[14px]",
        innerText: "Add to Card",
        id: "btnAddToCard",
        onclick: goToCheckout,
        children: [
          El({
            element: "img",
            className:
              " text-white absolute  w-[17px]  h-[17px] end-[60px] top-[20px] ",
            src: "src/assets/image/right.png",
          }),
        ],
      }),
    ],
  });
}
