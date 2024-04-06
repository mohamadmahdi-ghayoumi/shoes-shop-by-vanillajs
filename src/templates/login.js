import { El } from "../utils/create-element";

export function loginForm() {
  // inputPassword.addEventListener()
  const element = El({
    element: "div",
    className: "h-full",
    children: [
      El({
        element: "div",
        innerText: "",
        className: "h-[56px]  items-center flex",
        children: [
          El({
            element: "a",
            href: "/",
            className: "",
            children: [
              El({
                element: "img",
                src: "../src/assets/image/arrow-left.png",
                className: "w-[32px] h-[32px] mx-[24px]",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "img",
        className: "m-auto w-[54px] h-[81px] mt-[76px] mb-[118px]",
        src: "../src/assets/image/logo-login.png ",
      }),
      El({
        element: "h1",
        className: "text-[32px] font-bold h-[39px] w-[342px] m-auto",
        innerText: "Login to Your Account",
      }),
      El({
        element: "div",
        className: "flex mt-[48px]  w-full relative h-[37px] mb-[21px]",
        children: [
          El({
            element: "span",
            className:
              "icon-[bi--envelope-fill] w-[16px] h-[16px] my-auto absolute top-[11px] start-[36px] text-gray-500 ",
            id: "span-envelope",
          }),
          El({
            element: "input",
            className: "text-[14px] px-[32px] w-full mx-[24px] ",
            placeholder: "Email",
            id: "input-Email",

            onkeyup: inputEmail,
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex  w-full relative h-[37px] mb-[21px]",
        children: [
          El({
            element: "span",
            id: "span-lock",
            className:
              "icon-[uis--lock] w-[16px] h-[16px] my-auto absolute top-[11px] start-[36px] text-gray-500",
          }),
          El({
            element: "input",
            className: "text-[14px] px-[32px] w-full mx-[24px] ",
            placeholder: "Password",
            id: "input-password",
            type: "password",
            // eventListener: [
            //   {
            //     event: "onkeyup",
            //     callback: inputPassword,
            //   },
            // ],
            onkeyup: inputPassword,
          }),
          El({
            element: "span",
            className:
              "icon-[ion--eye-off]  w-[16px] h-[16px] my-auto absolute top-[11px] end-[36px] text-gray-500 ",
            id: "span-eye",
          }),
        ],
      }),
      El({
        element: "div",
        className: "mt-[40px] flex items-center justify-center gap-[8px]",
        children: [
          El({
            element: "input",
            className: "accent-black",
            type: "checkbox",
          }),
          El({
            element: "span",
            className: "",
            innerText: "Remember me",
          }),
        ],
      }),

      El({
        element: "button",
        className:
          "mt-[270px] bg-[#212529] mb-[32px] mx-[24px] rounded-3xl h-[47px] w-[380px] text-white",

        innerText: "Sing In",
      }),
    ],
  });

  function inputPassword() {
    document.getElementById("span-lock").classList.add("text-black");
    document.getElementById("span-eye").classList.add("text-black");
  }

  function inputEmail() {
    document.getElementById("span-envelope").classList.add("text-black");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const passIn = document.getElementById("input-password");
    const btn = document.getElementById("span-eye");
    btn.addEventListener("click", function () {
      const type =
        passIn.getAttribute("type") === "password" ? "text" : "password";
      passIn.setAttribute("type", type);
    });
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      loginForm.reset(); // Reset the form
      alert("Form submitted");
    });
  });

  return element;
}
