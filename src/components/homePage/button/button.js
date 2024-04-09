import { El } from "../../../utils/create-element";

export function buttonBrand({ logo, brand, className }) {
  function btnBrand(e) {
    const brand = e.target.closest("#btn").children[1].innerText;
    // const dogFound = new CustomEvent("animalfound", {
    //   detail: {
    //     name: brand,
    //   },
    // });
    console.log(brand);
    switch (`${brand}`) {
      case "Nike":
        window.location.href = "shoes-nike";
        break;
      case "Adidas":
        window.location.href = "shoes-adidas";
        break;
      case "Puma":
        window.location.href = "shoes-puma";
        break;
      case "Asics":
        window.location.href = "shoes-asics";
        break;
      case "Converse":
        window.location.href = "shoes-converse";
        break;
      case "New Balance":
        window.location.href = "shoes-newbalance";
        break;
      case "Reebok":
        window.location.href = "shoes-reebok";
        break;
      case "more":
        window.location.href = "shoes-allbrands";
        break;
    }
  }

  return El({
    element: "div",
    className: `flex flex-col  ${className} font-bold  w-[60px] h-[91px]  whitespace-nowrap overflow-hidden overflow-ellipsis`,
    id: "btn",
    onclick: btnBrand,

    children: [
      El({
        element: "div",
        className:
          "bg-gray-200 w-[60px] hover:bg-gray-300 h-[60px] flex rounded-full",

        children: [
          El({
            element: "span",
            className: ` ${logo}  w-[60px] h-[25px] m-auto  `,
          }),
        ],
      }),
      El({
        element: "span",
        className: "text-[14px]",
        innerText: `${brand}`,
      }),
    ],
  });
}
