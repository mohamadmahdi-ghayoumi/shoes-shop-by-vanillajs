import { El } from "../../../utils/create-element";

export function btnColor({ colorCircle, colorCheck }) {
  const Element = El({
    element: "button",
    className: `rounded-full border-[2px] p-5 border-none relative font-bold ${colorCircle}`,
    innerText: "",
    children: [
      El({
        element: "span",
        className: `hover:icon-[ic--baseline-check] hover:${colorCheck} absolute start-[12px] top-[12px] w-[30px] h-[30px]`,
      }),
    ],
  });
  return Element;
}
