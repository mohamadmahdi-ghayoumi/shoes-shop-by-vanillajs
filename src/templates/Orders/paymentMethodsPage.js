import { payments } from "../../components/paymentMethods/payments/payments";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function paymentMethodsPage() {
  return El({
    element: "div",
    className: "",
    children: [headerBack("Payment Methods" , "icon-[basil--add-outline]") , payments()],
  });
}
