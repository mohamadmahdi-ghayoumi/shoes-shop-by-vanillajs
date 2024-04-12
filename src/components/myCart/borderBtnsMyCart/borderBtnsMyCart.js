import { El } from "../../../utils/create-element";
import { borderBtnMyCart } from "../borderBtnMyCart/borderBtnMyCart";


export function borderBtnsMyCart() {

  const elemenet =  El({
    element: "div",
    className: "flex overflow-y-auto  gap-[12px] pl-[24px] hideScroll	 ",
    children: [
      borderBtnMyCart({ Brand: "All" }),
      borderBtnMyCart({ Brand: "Nike" }),
      borderBtnMyCart({ Brand: "Adidas" }),
      borderBtnMyCart({ Brand: "Puma" }),
      borderBtnMyCart({ Brand: "Asics" }),
      borderBtnMyCart({ Brand: "Reebok" }),
      borderBtnMyCart({ Brand: "New Balance" }),
      borderBtnMyCart({ Brand: "Converse" }),
    ],
  });
  // mozs.addEventListener("click" , (e)=>{
  //   console.log(e.target)})
  
    return elemenet
}
