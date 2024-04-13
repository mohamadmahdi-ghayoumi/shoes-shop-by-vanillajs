// import { El } from "../utils/create-element";
// import { router } from "../routes/router";
// import Swiper from "swiper";
// // import { register } from 'swiper/element/';

// // register()

// const slides = [
//   {
//     text: "We provide high quality products just for you",
//     src: "src/assets/image/slider1.png",
//   },
//   {
//     text: "Your satisfaction is our number one periority",
//     src: "src/assets/image/slider2.png",
//   },
//   {
//     text: "Let’s fulfill your fashion needs with shoearight now!",
//     src: "src/assets/image/slider3.png",
//   },
// ];
// export const slider = (slide) => {
//   return El({
//     element: "div",
//     className: "swiper-slide w-full flex flex-col",
//     children: [
//       El({
//         element: "div",
//         className: "w-full overflow-hidden",
//         children: [
//           El({
//             element: "img",
//             className: "w-full h-full",
//             src: slide.src,
//           }),
//         ],
//       }),
//       El({
//         element: "div",
//         className: "w-full flex items-center justify-center",
//         children: [
//           El({
//             element: "span",
//             className:
//               "w-full px-4 py-4 text-center text-black text-[28px] font-semibold mx-1",
//             innerText: slide.text,
//           }),
//         ],
//       }),
//     ],
//   });
// };

// const configSwiper = () => {
//   let swiper = new Swiper(".swiper", {
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     allowTouchMove: false,
//   });
//   return swiper;
// };
// export const StartSlider = () => {
//   setTimeout(configSwiper, 0);

//   return El({
//     element: "div",
//     id: "first-slider",
//     className:
//       "w-full h-full pb-4 flex flex-col items-center justify-end tall:justify-between transition ease-linear duration-500 transform",
//     children: [
//       El({
//         element: "div",
//         className: "w-full swiper",
//         children: [
//           El({
//             element: "div",
//             className: "swiper-wrapper mb-10",
//             children: [...slides.map((item) => slider(item))],
//           }),
//           El({
//             element: "div",
//             className: "swiper-pagination",
//           }),
//         ],
//       }),
//       El({
//         element: "div",
//         className: "w-full text-center mt-8 px-4",
//         children: [
//           El({
//             element: "button",
//             className: "w-full bg-dark p-4 text-white rounded-full",
//             children: "Next",
//             eventListener: [
//               {
//                 event: "click",
//                 callback: (e) => {
//                   const swiper = document.querySelector(".swiper").swiper;
//                   // Now you can use all slider methods like
//                   swiper.slideNext();
//                   if (e.target.innerText === "Get Started") {
//                     router().navigate("/login");
//                   }
//                   swiper.activeIndex == 2
//                     if (e.target.innerText = "Get Started")
//                     : null;
//                 },
//               },
//             ],
//           }),
//         ],
//       }),
//     ],
//   });
// };

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { El } from "../utils/create-element";
import { Link } from "../components/homePage/link/link";

const slides = [
  {
    text: "We provide high quality products just for you",
    src: "src/assets/image/slider1.png",
  },
  {
    text: "Your satisfaction is our number one periority",
    src: "src/assets/image/slider2.png",
  },
  {
    text: "Let’s fulfill your fashion needs with shoearight now!",
    src: "src/assets/image/slider3.png",
  },
];

function slider(item) {
  return El({
    element: "div",
    className: "swiper-slide w-full",
    children: [
      El({
        element: "div",
        className: "w-full overflow-hidden",
        children: [
          El({
            element: "img",
            className: "w-screen h-full",
            src: item.src,
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full flex items-center justify-center",
        children: [
          El({
            element: "span",
            className:
              "w-full px-4 py-4 text-center text-black text-[28px] font-semibold mx-1",
            innerText: item.text,
          }),
        ],
      }),
    ],
  });
}

export const StartSlider = () => {
  let swiper;

  const configSwiper = () => {
    swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      allowTouchMove: false,
    });
  };

  setTimeout(configSwiper, 0);

  return El({
    element: "div",
    id: "first-slider",
    className:
      "w-full h-full pb-4 flex flex-col items-center justify-end tall:justify-between transition ease-linear duration-500 transform",
    children: [
      El({
        element: "div",
        className: "w-full swiper",
        children: [
          El({
            element: "div",
            className: "swiper-wrapper mb-10",
            children: [...slides.map((item) => slider(item))],
          }),
          El({
            element: "div",
            className: "swiper-pagination",
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full text-center mt-8 px-4",
        children: [
          Link({
            className: "",
            children: [
              El({
                element: "button",
                className: "w-full bg-gray-300 p-4 text-white rounded-full",
                children: "Next",
                eventListener: [
                  {
                    event: "click",
                    callback: (e) => {
                      if (swiper) {
                        // Check if swiper is initialized
                        swiper.slideNext();
                        if (e.target.innerText === "Get Started") {
                          // router.navigate("/login");
                          window.location.href = "/login";
                        }
                        if (swiper.activeIndex === 2) {
                          e.target.innerText = "Get Started";
                        }
                      }
                    },
                  },
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
