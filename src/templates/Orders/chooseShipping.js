import { El } from "../../utils/create-element";

export function chooseShipping(){

    return El({
        element: "div",
        className: "",
        children: [headerBack("Choose Shipping"), ],
      });
}