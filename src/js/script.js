const lamp = document.querySelector(".lamp");
const css = document.querySelector("#css");
const white = "src/style/main.css";
const dark = "src/style/main-dark.css";

const savelocalStorage = (key, valor) => {
  localStorage.setItem(key, valor);
};

const getlocalStorage = (key) => localStorage.getItem(key);

const localTema = () => {
  const tema = getlocalStorage("tema");
  if (tema === "white") {
    css.href = white;
  }
  if (tema === "dark") {
    css.href = dark;
  }
};

localTema();

const darkMode = () => {
  const text = css.href.indexOf("src");
  const info = css.href.substring(text);
  if (info === dark) {
    css.href = white;
    savelocalStorage("tema", "white");
  } else {
    css.href = dark;
    savelocalStorage("tema", "dark");
  }
};

lamp.addEventListener("click", darkMode);
