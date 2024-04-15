import { El } from "../../../utils/create-element";
import { onePayment } from "../onePayment/onePayment";

export function payments() {
  function finishOrder() {
    window.location.href = "/checkout";
  }

  return El({
    element: "div",
    className: "mx-[24px] flex flex-col gap-[80px] mt-[50px]",
    children: [
        El({
element : "p",
className : "text-gray-700",
innerText : "Select the payment method you want to use"
        }),
      onePayment("Economy", "icon-[solar--wallet-bold]", "$9.379", "economy"),
      onePayment("REgular", "icon-[logos--paypal]", "", "regular"),

      onePayment("Cargo", "icon-[devicon--google]", "", "cargo"),

      onePayment("Express", "icon-[ic--twotone-apple]", "", "express"),

      //   El({
      //     element: "button",
      //     className:
      //       "bg-gray-200  w-[90%] rounded-[60px] text-[20px] m-auto w-[60px] h-[60px] font-semibold",
      //     innerText: "Add New Address",
      //     id: "btnAddToCard",
      //     // onclick: addToOrders,
      //   }),
      El({
        element: "button",
        className:
          "bg-black text-white w-[90%] rounded-[60px] mt-[330px]  text-[20px] m-auto h-[60px]",
        innerText: "Apply",
        onclick: finishOrder,
      }),
    ],
  });
}
