import { MainOrders } from "../components/MyOrders/MainOrders/MainOrders";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { headerMyOrders } from "../layout/header/headerMyOrders";
import { El } from "../utils/create-element";

export function MyOrders(){


return El({
    element : "div",
    className : "",
    children : [  MainOrders() , footerHomePage("hidden" , "icon-[clarity--home-line]" , "icon-[bi--bag]" , "icon-[bi--cart-dash-fill]")]
})

}