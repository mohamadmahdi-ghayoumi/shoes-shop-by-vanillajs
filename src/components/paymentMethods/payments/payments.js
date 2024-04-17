import { deleteCardProductForCart } from "../../../api/delete/deleteProducts";
import { getCardProductForOrder } from "../../../api/get/getProducts";
import { addToOrder } from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";
import { onePayment } from "../onePayment/onePayment";

export function payments() {
  function finishOrder() {
    
      getCardProductForOrder().then((data) => {
        {
          addToOrder(data);
          deleteCardProductForCart()
      window.location.href = "/successfulpage";
          console.log(data);
        }
      });
    
  }

  return El({
    element: "div",
    className: "mx-[24px] flex flex-col gap-[80px] mt-[50px]",
    children: [
      El({
        element: "p",
        className: "text-gray-700",
        innerText: "Select the payment method you want to use",
      }),
      onePayment(
        "My wallet",
        "icon-[solar--wallet-bold] checked:bg-black",
        "$9.379",
        "economy",
        "My walle"
      ),
      onePayment("PayPal", "icon-[logos--paypal]", "", "PayPal"),

      onePayment("Google Pay", "icon-[devicon--google]", "", "Google Pay"),

      onePayment("Apple", "icon-[ic--twotone-apple]", "", "Apple"),
      onePayment(
        ".... .... .... ....4679",
        "icon-[logos--mastercard]",
        "",
        "express"
      ),

      El({
        element: "button",
        className:
          "bg-black text-white w-[90%] rounded-[60px] mt-50  text-[20px] m-auto h-[60px]",
        innerText: "Apply",
        onclick: finishOrder,
      }),
    ],
  });
}
