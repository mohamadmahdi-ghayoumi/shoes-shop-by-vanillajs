import { MainOrders } from "../components/myOrders/MainOrders/MainOrders";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { headerMyOrders } from "../layout/header/headerMyOrders";
import { El } from "../utils/create-element";

export function myOrdersPage(){


return El({
    element : "div",
    className : "",
    children : [headerMyOrders() , MainOrders() , footerHomePage("hidden" , "icon-[clarity--home-line]" , "icon-[bi--bag]" , "icon-[bi--cart-dash-fill]")]
})

}