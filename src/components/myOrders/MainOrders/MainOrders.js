// import { El } from "../../../utils/create-element";

import { El } from "../../../utils/create-element";
import { renderOrderCart } from "../../checkout/renderOrderCart/renderOrderCart";
import { renderMyCart } from "../../myCart/renderMyCard/renderMyCart";

// export function MainOrders() {
//     function showTab(tabName) {
//       var tabs = document.querySelectorAll(".tab");
//       tabs.forEach((tab) => tab.classList.remove("active"));

//       var tabContent = document.querySelectorAll(".tab-content");
//       tabContent.forEach((content) => content.classList.add("hidden"));

//       document.getElementById(tabName + "-tab").classList.add("active");
//       document.getElementById(tabName + "-content").classList.remove("hidden");
//     }

//   return El({
//     element: "div",
//     className: "bg-red-500",
//     innerText: "sfdf",

//     children: [
//       El({
//         element: "div",
//         className: "flex",
//         id: "",
//         innetText: "sfdf",
//         children: [
//           El({
//             element: "button",
//             className: "tab active",
//             id: "active-tab bg-black",
//             onclick: () => showTab("active"),
//             innetText: "active",
//           }),
//           El({
//             element: "button",
//             className: "tab",
//             id: "complete-tab",
//             innetText: "complete",
//             onclick: () => showTab("complete"),
//           }),
//         ],
//       }),
//       El({
//         element: "div",
//         className: "tab-content",
//         id: "active-content",
//         innetText: "active lhpdf klmpfd",
//       }),
//       El({
//         element: "div",
//         className: "tab-content hidden",
//         id: "complete-content",
//         innetText: "complelte vmo ksdogfj ijgsrdg",
//       }),
//     ],
//   });
// }

// import { El } from "../../../utils/create-element";

// export function MainOrders() {
//   //   function openCity(evt, cityName) {
//   //     var i, tabcontent, tablinks;
//   //     tabcontent = document.getElementsByClassName("tabcontent");
//   //     for (i = 0; i < tabcontent.length; i++) {
//   //       tabcontent[i].style.display = "none";
//   //     }
//   //     tablinks = document.getElementsByClassName("tablinks");
//   //     for (i = 0; i < tablinks.length; i++) {
//   //       tablinks[i].className = tablinks[i].className.replace(" active", "");
//   //     }
//   //     document.getElementById(cityName).style.display = "block";
//   //     evt.currentTarget.className += " active";
//   //   }

//   // return El({
//   //   element : "div",
//   //   className : "",
//   //   innerText: "fdsf"
//   // })
//   //   return El({
//   //     element: "div",
//   //     className: "",
//   //     innerText: "dfsdf",
//   //   });

//   return El({
//     element: "div",
//     className: "",
//     innerText: "dfsdf",
//     children: [
//       El({
//         element: "div",
//         className: "tab",
//         children: [
//           El({
//             element: "button",
//             className: "tablinks",
//             // onclick: (evt) => openCity(evt, "London"),
//             innerText: "London",
//           }),
//           El({
//             element: "button",
//             className: "tablinks",
//             // onclick: (evt) => openCity(evt, "Paris"),
//             innerText: "Paris",
//           }),
//           El({
//             element: "button",
//             className: "tablinks",
//             // onclick: (evt) => openCity(evt, "Tokyo"),
//             innerText: "Tokyo",
//           }),
//         ],
//       }),
//       El({
//         element: "div",
//         id: "London",
//         className: "tabcontent",
//         children: [
//           El({ element: "h3", innerText: "London" }),
//           El({
//             element: "p",
//             innerText: "London is the capital city of England.",
//           }),
//         ],
//       }),
//       El({
//         element: "div",
//         id: "Paris",
//         className: "tabcontent",
//         children: [
//           El({ element: "h3", innetText: "Paris" }),
//           El({ element: "p", innetText: "Paris is the capital of France." }),
//         ],
//       }),
//       El({
//         element: "div",
//         id: "Tokyo",
//         className: "tabcontent",
//         children: [
//           El({ element: "h3", innetText: "Tokyo" }),
//           El({ element: "p", innetText: "Tokyo is the capital of Japan." }),
//         ],
//       }),
//     ],
//   });
// }

export function MainOrders() {
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add("hidden");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(cityName).classList.remove("hidden");
    evt.currentTarget.classList.add("active");
  }

  return El({
    element: "div",
    className: " justify-center items-center flex flex-col m-auto",
    children: [
      El({
        element: "div",
        className: "flex w-full mx-auto ",
        children: [
          El({
            element: "button",
            className:
              "tablinks px-4 py-2  hover:bg-gray-300 w-1/4 border-b-2 border-black m-auto",
            onclick: (evt) => openCity(evt, "Active"),
            innerText: "Active",
          }),
          El({
            element: "button",
            className:
              "tablinks px-4 py-2  hover:bg-gray-300 w-1/4 m-auto border-b-2 border-black",
            onclick: (evt) => openCity(evt, "Compeleted"),
            innerText: "Compeleted",
          }),
        ],
      }),
      El({
        element: "div",
        id: "Active",
        className: "tabcontent hidden",
        children: [renderMyCart()],
      }),
      El({
        element: "div",
        id: "Compeleted",
        className: "tabcontent hidden flex justify-center items-center",
        children: [renderOrderCart()],
      }),
    ],
  });
}
