import { El } from "../../../utils/create-element";
import { ButtonsColor } from "../ButtonsColor/ButtonsColor";
import { ButtonsSize } from "../ButtonsSize/ButtonsSize";

export function ColorSizeButtons() {
  return El({
    element: "form",
    className: "flex mb-3 mx-[24px]",
    children: [
      El({
        element: "div",
        className: "w-1/2 flex flex-col mt-3",
        children: [
          El({
            element: "p",
            className: "font-bold mb-2",
            innerText: "Size",
          }),
          ButtonsSize(),
        ],
      }),
      El({
        element: "div",
        className: "w-1/2 flex flex-col mt-3",
        children: [
          El({
            element: "p",
            className: "font-bold mb-2",
            innerText: "Color",
          }),
          ButtonsColor(),
        ],
      }),
    ],
  });
}
