import { El } from "../../../utils/create-element";
import { Link } from "../../homePage/link/link";

export function oneCartInMyCart({ product }) {
  const { name, price, imageURL, id, colors, sizes, quantity , value} = product;
  let color = "";
  switch (colors) {
    case "bg-red-500":
      color = "red";
      break;
    case "bg-blue-500":
      color = "blue";
      break;
    case "bg-[#1a1a1a]":
      color = "black";
      break;
    case "bg-yellow-700":
      color = "brown";
      break;
    case "bg-white-500":
      color = "white";
      break;
  }

  function subtractBtn(e) {
    const countCart = +document.getElementById("span-countCart").innerText;
    // console.log(typeof countCart);

    if (countCart > 0) {
      // console.log(countCart);
      // countCart--;
      document.getElementById("span-countCart").innerText = countCart - 1;
    }
  }

  function sumBtn(e) {
    console.log(`  e : ${e.target.closest(".gap-4").children[1].innerText}`);
    const countCart = +document.querySelector(".countCart").innerText;
    let meghdar = e.target.closest(".gap-4").children[1].innerText;
    // console.log(`  e : ${meghdar}`);
    // console.log(`  span : ${countCart}`);

    console.log(countCart);
    if (countCart < 3) {
      // countCart++;
      meghdar = "ghg";
    }
  }

  function deleteCart(e) {
    document.getElementById("footer").classList.add("hidden");
    document.getElementById("modalDelete").classList.remove("hidden");
    document.getElementById("overlayModal").classList.remove("hidden");
    // const modalDelete = document.getElementById("modalDelete");
    // modalDelete.innerText = "";
    // console.log(product.id)
    // document.getElementById("fd").id = product.id;
    document.getElementById("modalDelete").value = product.value
    document.getElementById("imageModal").src = product.imageURL;
    document.getElementById("nameModal").innerText =
      e.target.closest(".cart").children[1].children[0].innerText;
    document.getElementById("colorModal").innerText =
      e.target.closest(".cart").children[1].children[1].children[1].innerText;
    document.getElementById("sizeModal").innerText =
      e.target.closest(".cart").children[1].children[1].children[4].innerText;
    document.getElementById("priceModal").innerText = product.price;
    // e.target.closest(".cart").children[1].children[2].children[0].innerText;
    document.getElementById("quantityModal").innerText =
      e.target.closest(
        ".cart"
      ).children[1].children[2].children[1].children[1].innerText;
    document.getElementById("bgColorModal").className =
      e.target.closest(".cart").children[1].children[1].children[0].className;
    console.log(document.getElementById("modalDelete").value);
  }

  const Element = El({

    element: "div",
    value : value, 
    className: " h-[130px]  mt-[24px]  flex gap-3 w-full cart",
    id: "parentcartt",
    children: [
      Link({
        href: `/products/${id}`,
        children: [
          El({
            element: "img",
            className: "rounded-2xl  w-[130px]",
            src: imageURL,
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex flex-col justify-between relative ",
        children: [
          El({
            element: "p",
            id: id,
            className:
              "font-semibold  text-[20px] whitespace-nowrap overflow-hidden overflow-ellipsis w-[150px] ",
            innerText: name,
          }),
          El({
            element: "div",
            className: "flex gap-4 ",
            children: [
              El({
                element: "div",
                className: `w-6 ${colors} rounded-full`,
                innerText: "",
              }),

              El({
                element: "div",
                className: "",
                innerText: color,
              }),
              El({
                element: "div",
                className: "",
                innerText: "|",
              }),
              El({
                element: "div",
                className: "",
                innerText: "size",
              }),
              El({
                element: "div",
                className: "",
                innerText: sizes,
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between items-center",
            children: [
              El({
                element: "p",
                className: "font-semibold text-[25px]",
                innerText: `$ ${price}`,
              }),
              El({
                element: "div",
                className: "bg-gray-200 ml-[60px] flex gap-4 px-4 rounded-2xl",
                children: [
                  El({
                    element: "span",
                    className: "font-bold",
                    id: "span-subtract",
                    addEvenListener: [
                      {
                        event: "onclick",
                        callback: (e) => subtractBtn(e),
                      },
                    ],

                    innerText: "-",
                  }),
                  El({
                    element: "span",
                    className: "font-bold countCart",
                    id: "span-countCart",
                    innerText: quantity,
                  }),
                  El({
                    element: "span",
                    className: "font-bold",
                    id: "span-sum",
                    onclick: sumBtn,
                    innerText: "+",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "span",
            onclick: deleteCart,
            className:
              "icon-[ant-design--delete-outlined] absolute top-2 end-2 w-5 h-5",
          }),
        ],
      }),
    ],
  });

  return Element;
}
