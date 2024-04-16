import { login } from "../../templates/login/login";
import { El } from "../../utils/create-element";

export function loginPage() {
  return El({
    element: "div",
    className: "",
    children: [login()],
  });
}
