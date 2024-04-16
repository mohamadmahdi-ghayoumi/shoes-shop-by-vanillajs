import { locations } from "../../components/shippingAddress/locations/locations";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function shippingAddressPage() {
  return El({
    element: "div",
    className: "",
    children: [headerBack("Shipping Address"), locations()],
  });
}
