import { home } from "../../templates/home/home";
import { El } from "../../utils/create-element";

export function homePage() {
  return El({
    element: "div",
    className: "",
    children: [home()],
  });
}