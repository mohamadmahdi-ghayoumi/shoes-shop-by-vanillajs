import { ShippingAddress } from "../../components/Checkout/ShippingAddress/ShippingAddress";
import { AmountAndPayment } from "../../components/Checkout/AmountAndPayment/AmountAndPayment";
import { ChooseShippingType } from "../../components/Checkout/ChooseShippingType/ChooseShippingType";
import { OrderList } from "../../components/Checkout/OrderList/OrderList";
import { PromoCode } from "../../components/Checkout/PromoCode/PromoCode";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";
document.title = "Shoe Shop";

export function checkout() {
  return El({
    element: "div",
    className: "",
    children: [
      ShippingAddress(),
      OrderList(),
      ChooseShippingType(),
      PromoCode(),
      AmountAndPayment(),
    ],
  });
}
