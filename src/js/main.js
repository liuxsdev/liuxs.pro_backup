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

function getActiveTocElement() {
  const toc = document.querySelectorAll("h1");
  const current = [...toc].filter((item) => item.getBoundingClientRect().y < 0);
  // console.log([...toc].map((item) => item.getBoundingClientRect().y));
  // 取最后一个y小于0的元素,如果都不小于0,就返回第一个
  if (current.length == 0) {
    return toc[0];
  }
  return current.reverse()[0];
}

function markToc() {
  const activetoc = getActiveTocElement();
  const id = activetoc.id;
  toclist = document.querySelectorAll("#toc li a");
  // 取消所有active
  toclist.forEach((element) => {
    element.dataset.active = false;
  });
  toclist_ids = [...toclist].map((item) => item.href.split("/#").reverse()[0]);
  index = toclist_ids.indexOf(id);
  current = toclist[index];
  current.dataset.active = true;
}

window.onload = function () {
  const btn_toogle_theme = document.querySelector("#btn-toggle");
  const main_dom = document.querySelector("div#main");
  btn_toogle_theme.onclick = toogle_theme;
  main_dom.addEventListener("scroll", () => {
    markToc();
  });
};

document.addEventListener("DOMContentLoaded", function () {
  apply_theme();
});
