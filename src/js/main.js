function apply_theme() {
  const current_theme = localStorage.getItem("theme");
  //如果localStorage存了主题信息，则根据主题信息设置
  if (current_theme) {
    if (current_theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } else {
    //否则查询系统设置
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }
}

function toogle_theme() {
  const current_theme = localStorage.getItem("theme");
  if (current_theme) {
    if (current_theme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
}

window.onload = function () {
  apply_theme();
  const btn_toogle_theme = document.querySelector("#btn-toggle");
  btn_toogle_theme.onclick = toogle_theme;
};