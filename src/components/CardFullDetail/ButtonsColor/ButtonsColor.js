import { ButtonColor } from "../ButtonColor/ButtonColor";
import { El } from "../../../utils/create-element";

export function ButtonsColor() {
  return El({
    element: "div",
    className: "flex items-center overflow-y-auto gap-3",
    children: [
      ButtonColor({ colorCheck: "text-black", colorCircle: "bg-blue-500" }),
      ButtonColor({ colorCheck: "text-white", colorCircle: "bg-[#1a1a1a]" }),
      ButtonColor({ colorCheck: "text-black", colorCircle: "bg-red-500" }),
      ButtonColor({ colorCheck: "text-black", colorCircle: "bg-yellow-700" }),
      ButtonColor({ colorCheck: "text-black", colorCircle: "bg-white-500" }),
    ],
  });
}
