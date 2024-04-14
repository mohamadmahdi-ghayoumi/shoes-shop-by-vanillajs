import { shippingAddress } from "../../components/checkout/shippingAddress/shippingAddress";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";

export function checkoutPage(){


    return El({
        element : "div",
        className : "",
        children : [headerBack("Checkout" , "icon-[pepicons-pencil--text-bubble]") , shippingAddress()]
    })
}