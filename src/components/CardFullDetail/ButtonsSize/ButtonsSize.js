// import { ButtonSize } from "../ButtonSize/ButtonSize";
// import { El } from "../../../utils/create-element";

import { El } from "../../../utils/create-element";
import { ButtonSize } from "../ButtonSize/ButtonSize";

// export function ButtonsSize() {
//     return El({

//     element: "div",
//     className: "flex items-center gap-3",
//     children: [ButtonSize("41"), ButtonSize("42"), ButtonSize("43")],
//   });
// }

export function ButtonsSize(sizes) {
  // const buttons = document.getElementById('ButtonSizes');
  // console.log(sizes);
  console.log(sizes)
  const Element = El({
  element: 'div',
  className: 'flex gap-[5px]',
  id: 'ButtonSizes',
  children: sizes.map((res) => ButtonSize({ sizeCircle: res })),
  });
  return Element;
  }