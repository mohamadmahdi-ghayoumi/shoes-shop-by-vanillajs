import { ButtonSize } from "../ButtonSize/ButtonSize";
import { El } from "../../../utils/create-element";

export function ButtonsSize() {
    return El({

    element: "div",
    className: "flex items-center gap-3",
    children: [ButtonSize("41"), ButtonSize("42"), ButtonSize("43")],
  });
}
