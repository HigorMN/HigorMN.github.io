const lamp = document.querySelector(".lamp");
const css = document.querySelector("#css");

const darkMode = () => {
  const text = css.href.indexOf("src");
  const info = css.href.substring(text);
  const white = "src/style/main.css";
  const dark = "src/style/main-dark.css";
  if (info === dark) {
    css.href = white;
  } else {
    css.href = dark;
  }
};

lamp.addEventListener("click", darkMode);

window.onload = () => {};
