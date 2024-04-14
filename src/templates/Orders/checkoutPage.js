import { amountAndPayment } from "../../components/checkout/amountAndPayment/amountAndPayment";
import { chooseShippingType } from "../../components/checkout/chooseShippingType/chooseShippingType";
import { orderList } from "../../components/checkout/orderList/orderList";
import { promoCode } from "../../components/checkout/promoCode/promoCode";
import { shippingAddress } from "../../components/shippingAddress/shippingAddress";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function checkoutPage() {
  return El({
    element: "div",
    className: "",
    children: [
      headerBack("Checkout", "icon-[pepicons-pencil--text-bubble]"),
      shippingAddress(),
      orderList(),
      chooseShippingType(),
      promoCode(),
      amountAndPayment(),
    ],
  });
}
