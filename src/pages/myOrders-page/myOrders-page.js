// LayoutMyOrders

import { LayoutMyOrders } from "../../layout/layoutMyOrders";
import { MyOrders } from "../../templates/myOrders";
import { El } from "../../utils/create-element";

export function myOrdersPage() {
    return El({
      element: "div",
      className: "",
      children: [LayoutMyOrders(MyOrders())],
    });
  }
  