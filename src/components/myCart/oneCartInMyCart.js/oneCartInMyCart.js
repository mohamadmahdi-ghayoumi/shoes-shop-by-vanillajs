import { getItemForEditCard } from "../../../api/get/getProducts";
import { editCart } from "../../../api/post/postProduct";
import { El } from "../../../utils/create-element";
import { Link } from "../../homePage/link/link";

export function oneCartInMyCart({ product }) {
  const {
    name,
    price,
    imageURL,
    id,
    colors,
    sizes,
    quantity,
    value,
    totalPrice,
  } = product;
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

  let counter = quantity;

  function subtractBtn(e) {
    const quantityCounter = document.getElementById(`spanCounter${value}`);

    const totalPrice = document.getElementById(`totalPriceSpan${value}`);
    const priceMyCart = document.getElementById("priceMyCart");
    console.log(priceMyCart);
    if (counter > 1) {
      editCart(value, "subtract");
      getItemForEditCard(value).then((item) => {
        totalPrice.innerText = item.totalPrice - item.price;
        // totalOfAllItems.innerText -= item.price;
        priceMyCart.innerText = +priceMyCart.innerText - item.price;
      });
      counter--;
      quantityCounter.innerText = counter;
    }

  }

  function sumBtn(e) {
    const quantityCounter = document.getElementById(`spanCounter${value}`);

    const totalPrice = document.getElementById(`totalPriceSpan${value}`);

    // const totalOfAllItems = document.getElementById('totalOfAllItems');
    if (counter < 3) {
      editCart(value, "add");
      getItemForEditCard(product.value).then((item) => {
        totalPrice.innerText = item.totalPrice + item.price;
        const priceMyCart = document.getElementById("priceMyCart");

        priceMyCart.innerText = +priceMyCart.innerText + item.price;

        // totalOfAllItems.innerText += item.price;
      });
      counter++;
      quantityCounter.innerText = counter;
    }
  }

  function deleteCart(e) {
    document.getElementById("footer").classList.add("hidden");
    document.getElementById("modalDelete").classList.remove("hidden");
    document.getElementById("overlayModal").classList.remove("hidden");

    document.getElementById("modalDelete").value = product.value;
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
    value: value,
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
                id: `totalPriceSpan${product.value}`,
                innerText: totalPrice,
              }),
              El({
                element: "div",
                className: "bg-gray-200 ml-[60px] flex gap-4 px-4 rounded-2xl",
                children: [
                  El({
                    element: "span",
                    className: "font-bold cursor-pointer",
                    id: "span-subtract",
                    onclick: subtractBtn,

                    innerText: "-",
                  }),
                  El({
                    element: "span",
                    className: "font-bold countCart",
                    id: `spanCounter${value}`,
                    innerText: quantity,
                  }),
                  El({
                    element: "span",
                    className: "font-bold cursor-pointer",
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
