import { El } from "../../../utils/create-element";

export function ErrorLogin() {
  const element = El({
    element: "span",
    className: "hidden text-red-500 m-auto pt-3",
    id: "errorLogin",
    innerText: "username or password is incorrect !",
  });

  return element;
}
