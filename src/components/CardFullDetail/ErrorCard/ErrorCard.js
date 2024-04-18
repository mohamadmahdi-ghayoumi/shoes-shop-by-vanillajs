import { El } from "../../../utils/create-element";

export function ErrorCard() {
  const element = El({
    element: "span",
    className: "hidden text-red-500 m-auto",
    id: "errorCard",
    innerText: "Please enter the full values!",
  });

  return element;
}
