const link = document.querySelector(".link-login");
const modalLogin = document.querySelector(".modal-login");
const close = document.querySelectorAll(".modal-close");
const linkMap = document.querySelector(".why-road-btn");
let modalMap = document.querySelector(".modal-map");
const login = document.querySelector("[name=login]");
const password = document.querySelector("[name=password]");
let form = document.querySelector(".login-form");
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modalLogin.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("hidden");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

// Close

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!modalLogin.classList.contains("hidden")) {
      modalLogin.classList.add("hidden");
      modalLogin.classList.remove("modal-error");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!modalMap.classList.contains("hidden")) {
      modalMap.classList.add("hidden");
    }
  }
});

close[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.add("hidden");
  modalLogin.classList.remove("modal-error");
});

close[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("hidden");
});

//Show map

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("hidden");
});