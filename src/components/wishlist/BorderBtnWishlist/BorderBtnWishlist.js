import { El } from "../../../utils/create-element";
import { RenderWishlist } from "../RenderWishlist/RenderWishlist";

export function BorderBtnWishlist({ Brand, classname }) {
  const button = El({
    element: "div",
    className: `border-[2px] rounded-full whitespace-nowrap font-semibold filter-button cursor-pointer border-black inline-block ${classname} px-[20px] text-[16px] m-auto	py-[5px]`,
    innerText: Brand,
  });

  button.addEventListener("click", (e) => {
    const buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((btn) => {
      btn.classList.remove("bg-[#343A40]", "text-white");
      btn.classList.add("bg-white", "text-black");
    });

    button.classList.remove("bg-white", "text-black");
    button.classList.add("bg-[#343A40]", "text-white");

    const handleClick = (clickedIndex) => {
      buttons.forEach((button, index) => {
        if (index === clickedIndex) {
          button.style.backgroundColor = "#343A40";
          button.style.color = "white";
        } else {
          button.style.backgroundColor = "white";
          button.style.color = "#343A40";
        }
      });
    };

    let filterBrand = e.target.innerText.toLowerCase();
    const render = document.getElementById("render");

    if (render != null) {
      render.remove();
    }
    const main = document.getElementById("home");
    // let productFilter = renderProducts(filterBrand);
    let productFilter = RenderWishlist(filterBrand);

    console.log(productFilter);

    main.append(productFilter);
    // console.log(main);
  });

  return button;
}
