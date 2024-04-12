import { router } from "../../../routes/router";
import { El } from "../../../utils/create-element";

export function searchBox() {
  function goPageSearch() {
    window.location.href = "/searchpage";
  }

  return El({
    element: "div",
    children: [
      El({
        element: "input",
        className:
          " w-[380px] h-[40px] m-auto ml-[30px] relative mt-[16px] pl-[28px] bg-gray-100 rounded-xl",
        placeholder: "Search",
        onkeyup: goPageSearch,
        //  router.navigate("./searchpage"),
      }),
      El({
        element: "span",
        className:
          "icon-[iconamoon--search-thin] absolute top-[109px] w-[16px] h-[16px] start-[37px]",
      }),
    ],
  });
}
