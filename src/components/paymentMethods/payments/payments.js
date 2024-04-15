import { El } from "../../../utils/create-element";
import { onePayment } from "../onePayment/onePayment";

export function payments() {
function finishOrder(){
  window.location.href = "/checkout"
}



  return El({
    element: "div",
    className: "mx-[24px] flex flex-col  gap-10 mt-[50px]",
    children: [
      onePayment("Economy","icon-[fluent--box-checkmark-24-filled] text-white", "10", "economy"),
      onePayment("REgular", "icon-[f7--cube-box-fill] text-white" , "0", "regular"),

      onePayment("Cargo", "icon-[material-symbols--local-shipping] bg-white", "0", "cargo"),

      onePayment("Express", "icon-[fa-solid--shipping-fast] text-white" , "0", "express"),

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
        onclick : finishOrder

      }),
    ],
  });
}
