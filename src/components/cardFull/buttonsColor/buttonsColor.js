import { btnColor } from "../btnColor/btnColor";
import { El } from "../../../utils/create-element";

export function buttonsColor() {
  return El({
    element: "div",
    className: "flex items-center overflow-y-auto gap-3",
    children: [
      btnColor({ colorCheck: "text-black", colorCircle: "bg-blue-500" }),
      btnColor({ colorCheck: "text-white", colorCircle: "bg-[#1a1a1a]" }),
      btnColor({ colorCheck: "text-black", colorCircle: "bg-red-500" }),
      btnColor({ colorCheck: "text-black", colorCircle: "bg-yellow-700" }),
      btnColor({ colorCheck: "text-black", colorCircle: "bg-white-500" }),
    ],
  });
}
