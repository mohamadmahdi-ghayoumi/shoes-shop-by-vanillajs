import { El } from "../../../utils/create-element";
import { borderBtn } from "../borderBtn/borderBtn";


export function borderBtns() {

  const elemenet =  El({
    element: "div",
    className: "flex overflow-y-auto  gap-[12px] pl-[24px] hideScroll	 ",
    children: [
      borderBtn({ Brand: "All" , classname : "bg-[#343A40] text-white" }),
      borderBtn({ Brand: "Nike" }),
      borderBtn({ Brand: "Adidas" }),
      borderBtn({ Brand: "Puma" }),
      borderBtn({ Brand: "Asics" }),
      borderBtn({ Brand: "Reebok" }),
      borderBtn({ Brand: "New Balance" }),
      borderBtn({ Brand: "Converse" }),
    ],
  });
  // mozs.addEventListener("click" , (e)=>{
  //   console.log(e.target)})
  
    return elemenet
}
