import { ShippingAddress } from "../../components/checkout/ShippingAddress/shippingAddress";
import { amountAndPayment } from "../../components/checkout/amountAndPayment/amountAndPayment";
import { chooseShippingType } from "../../components/checkout/chooseShippingType/chooseShippingType";
import { orderList } from "../../components/checkout/orderList/orderList";
import { promoCode } from "../../components/checkout/promoCode/promoCode";
import { oneLocation } from "../../components/shippingAddress/oneLocation/oneLocation";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";
import { getLocalStorage } from "../../utils/localStorage";

export function checkoutPage() {


  return El({
    element: "div",
    className: "",
    children: [
      headerBack("Checkout", "icon-[circum--circle-more]"),
      ShippingAddress(),
      orderList(),
      chooseShippingType(),
      promoCode(),
      amountAndPayment(),
    ],
  });
}
