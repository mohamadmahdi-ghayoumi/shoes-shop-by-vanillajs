import { El } from "../../utils/create-element";

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
        window.location.href = "shoesnike";
        break;
      case "Adidas":
        window.location.href = "shoesadidas";
        break;
      case "Puma":
        window.location.href = "shoespuma";
        break;
      case "Asics":
        window.location.href = "shoesasics";
        break;
      case "Converse":
        window.location.href = "shoesconverse";
        break;
      case "New Balance":
        window.location.href = "shoesnewbalance";
        break;
      case "Reebok":
        window.location.href = "shoesreebok";
        break;
      case "more":
        window.location.href = "shoesallbrands";
        break;

      // case "All":
      //   window.location.href = "shoesadidas";
    }
    // const homeBrand = homePageBrand(brand);
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
