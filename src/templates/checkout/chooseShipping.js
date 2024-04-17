import { Shippings } from "../../components/ChooseShipping/Shippings/Shippings";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function chooseShipping() {
  return El({
    element: "div",
    className: "",
    children: [headerBack("Choose Shipping"), Shippings()],
  });
}
