import { MainOrders } from "../components/myOrders/MainOrders/MainOrders";
import { headerMyOrders } from "../layout/header/headerMyOrders";
import { El } from "../utils/create-element";

export function myOrdersPage(){


return El({
    element : "div",
    className : "",
    children : [headerMyOrders() , MainOrders()]
})

}