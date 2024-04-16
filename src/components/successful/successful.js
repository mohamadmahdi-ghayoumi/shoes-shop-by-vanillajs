import { El } from "../../utils/create-element";

export function successful() {

function btnViewOrder(){
  window.location.href = "/myorderspage"
}

  return El({
    element: "div",
    className: "absolute mx-auto flex flex-col justify-center items-center w-[80%] bg-white rounded-[70px] gap-5 py-8",
    // translate-x-2/4 -translate-y-2/4
    children: [
      El({
        element: "img",
        className: "w-[300px] h-[300px]",
        src: "/src/assets/image/notfound.png",
        
      }),
      El({
        element: "span",
        className: "font-bold text-[25px]",
        innerText: "Order Seccessful!",
      }),
      El({
        element: "span",
        className: "text-gray-700",
        innerText: "you have successfly mode order",
      }),
     El({
      element:"div",
      className : "flex flex-col gap-5 w-full justify-center items-center",
      children : [ 
        El({
        element: "button",
        className:
          "hover:bg-black hover:text-white w-[70%] rounded-[60px] bg-gray-300  text-[20px] h-[60px]",
        innerText: "View Order",
        onclick: btnViewOrder,
      }),
      El({
        element: "button",
        className:
          "  w-[70%] rounded-[60px] hover:bg-black hover:text-white  text-[20px] h-[60px] bg-gray-300" ,
        innerText: "View E-Receipt",
        // onclick: finishOrder,
      }),]
     })
    ],
  });
}
