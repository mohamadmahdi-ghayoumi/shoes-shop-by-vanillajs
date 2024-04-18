// import { ButtonColor } from "../ButtonColor/ButtonColor";
// import { El } from "../../../utils/create-element";

import { El } from "../../../utils/create-element";
import { ButtonColor } from "../ButtonColor/ButtonColor";

// export function ButtonsColor() {
//   return El({
//     element: "div",
//     className: "flex items-center overflow-y-auto gap-3",
//     children: [
//       ButtonColor({ colorCheck: "text-black", colorCircle: "bg-blue-500" }),
//       ButtonColor({ colorCheck: "text-white", colorCircle: "bg-[#1a1a1a]" }),
//       ButtonColor({ colorCheck: "text-black", colorCircle: "bg-red-500" }),
//       ButtonColor({ colorCheck: "text-black", colorCircle: "bg-yellow-700" }),
//       ButtonColor({ colorCheck: "text-black", colorCircle: "bg-white-500" }),
//     ],
//   });
// }

export function ButtonsColor(colors) {
  console.log(colors);

  const element = El({
    element: "div",
    className: "flex gap-1 hideScroll",
    children: colors.map((item) => ButtonColor({ colorCircle: item })),
  });

  return element;
}
