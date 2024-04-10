import { El } from "../../../utils/create-element";

// export function btnSize(name) {
  
//     // const buttons = document.querySelectorAll('.button');

//     // buttons.forEach((button, index) => {
//     //   button.addEventListener('mouseover', () => {
//     //     buttons.forEach((btn, i) => {
//     //       if (i !== index) {
//     //         btn.classList.remove('hover:bg-blue-700', 'hover:bg-green-700', 'hover:bg-yellow-700');
//     //       }
//     //     });
//     //   });
    
//     //   button.addEventListener('mouseout', () => {
//     //     buttons.forEach((btn) => {
//     //       btn.classList.add('hover:bg-blue-700', 'hover:bg-green-700', 'hover:bg-yellow-700');
//     //     });
//     //   });
//     // });
  
  
  
//     const Element =  El({
//     element: "button",
//     className:
//       "button   rounded-full border-[2px] p-1 hover:text-white hover:bg-black border-gray-600 text-gray-600 w-[40px] h-[40px] font-bold",
//     innerText: name,
//   });


// return Element



// }

export function btnSize(sizeCircle ) {
  const Element = El({
  element: 'div',
  children: [
  El({
  element: 'input',
  className: 'peer hidden',
  id: `size${sizeCircle}`,
  name: 'size',
  value: sizeCircle,
  type: 'radio',
  }),
  El({
  element: 'label',
  className:
  'select-none cursor-pointer rounded-full border-2 border-gray-300 py-1 px-2 font-bold text-gray-300 peer-checked:bg-black peer-checked:text-white peer-checked:border-none',
  restAttrs: {
  for: `size${sizeCircle}`,
  },
  innerText: sizeCircle,
  }),
  ],
  });
  
  return Element;
  }