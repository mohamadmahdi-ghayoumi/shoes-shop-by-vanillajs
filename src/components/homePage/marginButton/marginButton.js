import { El } from "../../../utils/create-element";
import { renderProducts } from "../renderProducts/renderProducts";

export function marginButton({ Brand }) {
  const button = El({
    element: "div",
    className:
      "border-[2px] rounded-full font-semibold hover:bg-gray-700 hover:text-white border-black inline-block px-[20px] text-[16px] m-auto	py-[5px]",
    innerText: Brand,
  });
  
  button.addEventListener("click", (e) => {
    let filterBrand = e.target.innerText.toLowerCase();
    const render = document.getElementById("render");

    if (render != null) {
      render.remove();
    }
    const main = document.getElementById("home");
    let productFilter = renderProducts(filterBrand);
    console.log(productFilter);

    main.append(productFilter);
    // console.log(main);
  });

  return button;
}
