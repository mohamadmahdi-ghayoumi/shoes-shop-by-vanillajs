import { btnSize } from "../../../components/cardFull/btnSize/btnSize";
import { El } from "../../../utils/create-element";

export function buttonsSize() {
  return El({
    element: "div",
    className: "flex items-center gap-3",
    children: [btnSize("41"), btnSize("42"), btnSize("43")],
  });
}
