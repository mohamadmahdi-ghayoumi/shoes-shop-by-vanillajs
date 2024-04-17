import { Locations } from "../../components/ShippingAddress/Locations/Locations";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function shippingAddressPage() {
  return El({
    element: "div",
    className: "",
    children: [headerBack("Shipping Address"), Locations()],
  });
}
