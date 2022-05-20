const urlParams = new URLSearchParams(window.location.search);
var docstr = urlParams.get("docname");

if (urlParams.has("docname")) {
  document.getElementById("doc").src = `./${docstr}.html`;

  var selected_menu_button = document.getElementById(docstr);
  selected_menu_button.style.background = "#f3f2ee";
  selected_menu_button.style.color = "#333333";
  selected_menu_button.disabled = true;

  document.title = "化學 • " + document.getElementById(docstr).innerHTML;
}

function changeSrc(target) {
  var new_url = `/Chemistry/index.html?docname=${target}`;
  window.history.pushState(null, "", new_url);
  document.getElementById("doc").src = "./" + target + ".html";

  var cancel_selected_menu_button = document.getElementById(docstr);
  cancel_selected_menu_button.style.background = "rgba(0, 0, 0, 0)";
  cancel_selected_menu_button.style.color = "#fff";
  cancel_selected_menu_button.disabled = false;

  docstr = target;

  var selected_menu_button = document.getElementById(docstr);
  selected_menu_button.style.background = "#f3f2ee";
  selected_menu_button.style.color = "#333333";
  selected_menu_button.disabled = true;

  document.title = "化學 • " + document.getElementById(docstr).innerHTML;

  selected_style();
}
