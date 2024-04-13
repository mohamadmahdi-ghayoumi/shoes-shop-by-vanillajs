import { El } from "../../../utils/create-element";

export function modalDeleteOverlay() {
  return El({
    element: "div",
    className:
      "hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-[926px] bg-gray-500 bg-opacity-70 pb-[100px]",
    children: [],
  });
}
