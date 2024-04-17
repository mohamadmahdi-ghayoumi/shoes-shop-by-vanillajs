import { El } from "../../../utils/create-element";

export function ButtonColor({ colorCircle, colorCheck }) {
  const Element = El({
    element: "div",
    children: [
      El({
        element: "input",
        className: "peer hidden",
        id: `color${colorCircle}`,
        name: "color",
        value: colorCircle,
        type: "radio",
      }),
      El({
        element: "label",
        className: ` relative ${colorCircle} select-none cursor-pointer rounded-full border-gray-300 py-1 px-[14px] font-bold peer-checked:border-4 peer-checked:border-gray-700 `,
        restAttrs: {
          for: `color${colorCircle}`,
        },
      }),
    ],
  });
  return Element;
}
