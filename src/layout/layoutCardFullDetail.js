import { El } from "../utils/create-element";

import { headerBack } from "./header/headerback";

export function LayoutCardFullDetail(main) {
  return El({
    element: "div",
    className: "",
    children: [
      headerBack(""),      
      El({
        element: "main",
        className: "container mx-auto",
        children: [main],
      }),
    ],
  });
}
