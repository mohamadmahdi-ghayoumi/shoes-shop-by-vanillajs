import { El } from "../../../utils/create-element";
import { buttonsColor } from "../buttonsColor/buttonsColor";
import { buttonsSize } from "../buttonsSize/buttonsSize";

export function colorSizeBtn() {
  return El({
    element: "div",
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
          buttonsSize(),
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
          buttonsColor(),
        ],
      }),
    ],
  });
}
