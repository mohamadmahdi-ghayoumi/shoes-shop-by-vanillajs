import { El } from "../../../utils/create-element";

export function priceCard({product}) {
  // function addToCard() {
  //   const count = document.getElementById("span-count")
  //   const color = document.getElementById
  //   console.log(count.innerText);

  // }

  function addToCard(e) {
    e.preventDefault();
    const color = document.querySelector("input[name='color']:checked");
    const size = document.querySelector("input[name='size']:checked");
    const quantity = document.querySelector("#span-count").innerText;
    if (color !== null && size !== null && quantity != "0") {
      console.log(color.value);
      console.log(size.value);
      console.log(quantity);
    } else {
      // alert("all item shoul be selected");
    }
  }

  return El({
    element: "div",
    className: "flex gap-[40px] mx-[24px]",
    children: [
      El({
        element: "div",
        className: "",
        children: [
          El({
            element: "div",
            className: "text-gray-500 text-[10px]",
            innerText: "Total price",
          }),
          El({
            element: "div",
            className: "font-bold text-[20px]",
            innerText: product.price,
          }),
        ],
      }),
      El({
        element: "button",
        className:
          "bg-black text-white w-full rounded-3xl relative text-[14px]",
        innerText: "Add to Card",
        id: "btnAddToCard",
        onclick: addToCard,
        children: [
          El({
            element: "span",
            className:
              "icon-[lets-icons--bag-fill] text-white absolute  w-[17px]  h-[17px] start-[60px] top-[14px]",
          }),
        ],
      }),
    ],
  });
}
