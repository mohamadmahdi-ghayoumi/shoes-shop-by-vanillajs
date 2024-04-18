// import { El } from "../../../utils/create-element";

import { El } from "../../../utils/create-element";

// export function ButtonColor({ colorCircle, colorCheck }) {
//   const Element = El({
//     element: "div",
//     children: [
//       El({
//         element: "input",
//         className: "peer hidden",
//         id: `color${colorCircle}`,
//         name: "color",
//         value: colorCircle,
//         type: "radio",
//       }),
//       El({
//         element: "label",
//         className: ` relative ${colorCircle} select-none cursor-pointer rounded-full border-gray-300 py-1 px-[14px] font-bold peer-checked:border-4 peer-checked:border-gray-700 `,
//         restAttrs: {
//           for: `color${colorCircle}`,
//         },
//       }),
//     ],
//   });
//   return Element;
// }

export function ButtonColor({ colorCircle }) {
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
        className: `flex items-center justify-center relative select-none cursor-pointer rounded-full border-gray-300 font-bold peer-checked:border-[6px] peer-checked:border-gray-700 w-8 h-8`,
        restAttrs: {
          for: `color${colorCircle}`,
          style: `background-color:${colorCircle}`,
        },
        children: [
          El({
            element: "span",
            className: `hover:icon-[ic--baseline-check] w-4 h-4`,
            restAttrs: {
              for: `color${colorCircle}`,
              style: `color: #ccc`,
            },
          }),
        ],
      }),
    ],
  });
  return Element;
}
