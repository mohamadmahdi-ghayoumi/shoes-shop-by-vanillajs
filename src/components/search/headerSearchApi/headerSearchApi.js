import { El } from "../../../utils/create-element";

export function headerSearchApi() {
  // if( ){

  // }
  //   const searchInput = document.getElementById("inputSearch").value;
  // getProductsSearch(searchInput).then((data) => {
  //     hasLengthProperty(data)

  //   console.log(searchInput);

  //   El({
  //     element: "div",
  //     className: "mx-[24px] flex ",
  //     children: [
  const Element = El({
    element: "div",
    className: "hidden flex justify-between mx-[24px] mt-[19px] items-center ",
    id: "headerSearchApi",
    children: [
      El({
        element: "div",
        className: "flex gap-5",
        children: [
          El({
            element: "span",
            className: "font-bold",
            innerText: "Result for",
          }),
          El({
            element: "span",
            className: "font-bold",
            id: "valueInput",
            innerText: ``,
          }),
        ],
      }),
      El({
        element: "span",
        className: "",
        id: "countData",
        innerText: `0`,
      }),
    ],
  });
  //     ],
  //   });

  return Element;
}
