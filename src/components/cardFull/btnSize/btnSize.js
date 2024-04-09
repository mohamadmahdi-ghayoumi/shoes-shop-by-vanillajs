import { El } from "../../../utils/create-element";

export function btnSize(name) {
  
    // const buttons = document.querySelectorAll('.button');

    // buttons.forEach((button, index) => {
    //   button.addEventListener('mouseover', () => {
    //     buttons.forEach((btn, i) => {
    //       if (i !== index) {
    //         btn.classList.remove('hover:bg-blue-700', 'hover:bg-green-700', 'hover:bg-yellow-700');
    //       }
    //     });
    //   });
    
    //   button.addEventListener('mouseout', () => {
    //     buttons.forEach((btn) => {
    //       btn.classList.add('hover:bg-blue-700', 'hover:bg-green-700', 'hover:bg-yellow-700');
    //     });
    //   });
    // });
  
  
  
    const Element =  El({
    element: "button",
    className:
      "button   rounded-full border-[2px] p-1 hover:text-white hover:bg-black border-gray-600 text-gray-600 w-[40px] h-[40px] font-bold",
    innerText: name,
  });


return Element



}
