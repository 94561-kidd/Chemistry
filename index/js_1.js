const urlParams = new URLSearchParams(window.location.search);
var docstr = urlParams.get("docname");

if (urlParams.has("docname")) {
  document.getElementById("doc").src = `./${docstr}.html`;
  selected_style();
}

function changeSrc(target) {
  docstr = target;

  var new_url = `/Chemistry/index.html?docname=${target}`;
  window.history.pushState(null, "", new_url);
  document.getElementById("doc").src = "./" + target + ".html";

  var menu_button = document.querySelector("button.menu-option");
  menu_button.style.background = "rgba(0, 0, 0, 0)";
  menu_button.style.color = "#fff";
  menu_button.disabled = false;

  selected_style();
}

function selected_style() {
  document.title = "化學 • " + document.getElementById(docstr).innerHTML;

  var selected_menu_button = document.getElementById(docstr);
  selected_menu_button.style.background = "#f3f2ee";
  selected_menu_button.style.color = "#333333";
  selected_menu_button.disabled = true;
}
