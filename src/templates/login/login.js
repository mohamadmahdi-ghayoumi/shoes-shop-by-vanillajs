import { getUser } from "../../api/get/getUser";
import { ErrorLogin } from "../../components/Login/ErrorLogin/ErrorLogin";
import { headerBack } from "../../layout/header/headerback";
import { setCookie } from "../../utils/coockie";
import { El } from "../../utils/create-element";

export function login() {
  const element = El({
    element: "div",
    className: " flex flex-col  ",
    children: [
      headerBack(""),
      El({
        element: "img",
        className: "m-auto w-15 h-15 mt-20 mb-[118px]",
        src: "src/assets/image/logo-login.png ",
      }),
      El({
        element: "h1",
        className: "text-[32px] font-bold h-8 w-[342px] m-auto",
        innerText: "Login to Your Account",
      }),
      El({
        element: "div",
        className: "flex mt-10 w-full relative h-8 mb-5",
        children: [
          El({
            element: "span",
            className:
              "icon-[bi--envelope-fill] w-4 h-4 my-auto absolute  text-gray-500 transform  start-10 inset-1/2 -translate-x-1/2 ",
            id: "span-envelope",
          }),
          El({
            element: "input",
            className: "text-[14px] px-[32px] w-full mx-[24px]  bg-gray-100 ",
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
              "icon-[uis--lock] w-4 h-4 my-auto absolute  text-gray-500 transform  start-10 inset-1/2 -translate-x-1/2",
          }),
          El({
            element: "input",
            className: "text-[14px] px-[32px] w-full mx-[24px] bg-gray-100 ",
            placeholder: "Password",
            id: "input-password",
            type: "password",
            onkeyup: inputPassword,
          }),
          El({
            element: "span",
            onclick: showPassword,
            className:
              "icon-[ion--eye-off]  w-4 h-4 my-auto absolute top-[11px] end-[36px] text-gray-500 ",
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
            id: "inputRemember",
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
          "mt-56  bg-gray-500  m-auto rounded-3xl h-[47px] w-[380px] text-white",

        innerText: "Sing In",
        id: "Btn-singIn",
        onclick: btnSingIn,
      }),
      ErrorLogin(),
    ],
  });

  function inputPassword() {
    const inputPass = document.getElementById("input-password");
    const inputEmail = document.getElementById("input-Email");
    if (inputPass.value != "") {
      document.getElementById("span-lock").classList.remove("text-gray-500");
      document.getElementById("span-lock").classList.add("text-black");
      document.getElementById("span-eye").classList.remove("text-gray-500");
      document.getElementById("span-eye").classList.add("text-black");
    } else if (inputPass.value == "") {
      document.getElementById("span-lock").classList.remove("text-black");
      document.getElementById("span-lock").classList.add("text-gray-500");
      document.getElementById("span-eye").classList.remove("text-black");
      document.getElementById("span-eye").classList.add("text-gray-500");
    }
  }

  function inputEmail() {
    const BtnSingIn = document.getElementById("Btn-singIn");
    const inputEmail = document.getElementById("input-Email");
    if (inputEmail.value != "") {
      document
        .getElementById("span-envelope")
        .classList.remove("text-gray-500");
      BtnSingIn.classList.remove("bg-gray-500");
      BtnSingIn.classList.add("bg-[#212529]");
      document.getElementById("span-envelope").classList.add("text-black");
    } else if (inputEmail.value == "") {
      document.getElementById("span-envelope").classList.remove("text-black");
      document.getElementById("span-envelope").classList.add("text-gray-500");
      BtnSingIn.classList.add("bg-gray-500");
      BtnSingIn.classList.remove("bg-[#212529]");
    }
  }

  function showPassword() {
    const passInput = document.getElementById("input-password");
    const showPass = document.getElementById("span-eye");
    if (passInput.hasAttribute("type")) {
      passInput.removeAttribute("type");
      showPass.classList.remove("icon-[ion--eye-off]");
      showPass.classList.add("icon-[heroicons-solid--eye]");
    } else {
      passInput.setAttribute("type", "password");
      showPass.classList.remove("icon-[heroicons-solid--eye]");
      showPass.classList.add("icon-[ion--eye-off]");
    }
  }

  function btnSingIn() {
    const inputRemember = document.getElementById("inputRemember").checked;
    getUser().then((data) => {
      console.log(data.password);
      const inputPass = document.getElementById("input-password");
      const inputEmail = document.getElementById("input-Email");
      if (
        inputPass.value == data[0].password &&
        inputEmail.value == data[0].email
      ) {
        setCookie("email", inputEmail.value, inputRemember ? 7 : "session");
        window.location.href = "/homepage";
      } else {
        document.getElementById("errorLogin").classList.remove("hidden");
      }
    });
  }

  return element;
}
