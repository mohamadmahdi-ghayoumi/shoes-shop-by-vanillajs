import { getUser } from "../api/get/getUser";
import { El } from "../utils/create-element";
// import { home } from "./home";

export function loginForm() {
  // inputPassword.addEventListener()
  const element = El({
    element: "div",
    className: "h-full flex flex-col ",
    children: [
      El({
        element: "div",
        innerText: "",
        className: "h-[56px] flex  ",
        children: [
          El({
            element: "a",
            href: "/",
            className: "",
            children: [
              El({
                element: "span",
                className:
                  "w-[32px] h-[32px] mx-[24px] icon-[ic--sharp-arrow-back] my-[12px]",
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
        className: "flex w-full relative h-[37px] mb-[21px]",
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
          "mt-[270px] bg-[#212529] mb-[32px] m-auto rounded-3xl h-[47px] w-[380px] text-white",

        innerText: "Sing In",
        id: "Btn-singIn",
        onclick: btnSingIn,
      }),
    ],
  });

  function inputPassword() {
    document.getElementById("span-lock").classList.add("text-black");
    document.getElementById("span-eye").classList.add("text-black");
  }

  function inputEmail() {
    document.getElementById("span-envelope").classList.add("text-blue");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const passIn = document.getElementById("input-password");
    const showPass = document.getElementById("span-eye");
    showPass.addEventListener("click", function () {
      const type =
        passIn.getAttribute("type") === "password" ? "text" : "password";
      passIn.setAttribute("type", type);
    });
  });

  function btnSingIn() {
    getUser().then((data) => {
      console.log(data.password);
      const inputPass = document.getElementById("input-password");
      const inputEmail = document.getElementById("input-Email");
      if (
        inputPass.value == data[0].password &&
        inputEmail.value == data[0].email
      ) {
        console.log("ok");
      } else {
        console.log("zart");
        // location.assign("/home");
        window.location.href = 'homepage';
      }
    });
  }

  return element;
}
