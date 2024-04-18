import { El } from "../../../utils/create-element";
import { ImageButton } from "../ImageButton/ImageButton";
import { MarginButton } from "../MarginButton/MarginButton";
export function MarginButtons() {
  const elemenet = El({
    element: "div",
    className: "flex overflow-y-auto  gap-[12px] pl-[24px] hideScroll	 ",
    children: [
      MarginButton({ Brand: "All", classname: "bg-[#343A40] text-white" }),
      MarginButton({ Brand: "Nike" }),
      MarginButton({ Brand: "Adidas" }),
      MarginButton({ Brand: "Puma" }),
      MarginButton({ Brand: "Asics" }),
      MarginButton({ Brand: "Reebok" }),
      MarginButton({ Brand: "New Balance" }),
      MarginButton({ Brand: "Converse" }),
    ],
  });


  return elemenet;
}
