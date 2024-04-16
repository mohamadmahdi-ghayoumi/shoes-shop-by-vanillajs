import { Shippings } from "../../components/chooseShipping/shippings/shippings";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function chooseShipping() {
  return El({
    element: "div",
    className: "",
    children: [headerBack("Choose Shipping"), Shippings()],
  });
}
