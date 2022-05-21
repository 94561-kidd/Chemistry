var urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("docname")) {
  var docstr = urlParams.get("docname");
  document.getElementById("doc").src = `./${docstr}.html`;

  var selected_menu_button = document.getElementById(docstr);
  selected_menu_button.style.background = "#f3f2ee";
  selected_menu_button.style.color = "#333333";
  selected_menu_button.disabled = true;

  document.title = "化學  •" + document.getElementById(docstr).innerHTML;
}

function changeSrc(target) {
  var url_params = new URLSearchParams(window.location.search);

  if (url_params.has("docname")) {
    var docstr = url_params.get("docname");

    var cancel_selected_menu_button = document.getElementById(docstr);
    cancel_selected_menu_button.style.background = "rgba(0, 0, 0, 0)";
    cancel_selected_menu_button.style.color = "#fff";
    cancel_selected_menu_button.disabled = false;
  }

  var new_url = `/Chemistry/index.html?docname=${target}`;
  window.history.pushState(null, "", new_url);
  document.getElementById("doc").src = "./" + target + ".html";

  var selected_menu_button = document.getElementById(target);
  selected_menu_button.style.background = "#f3f2ee";
  selected_menu_button.style.color = "#333333";
  selected_menu_button.disabled = true;

  document.title = "化學  •" + document.getElementById(target).innerHTML;
}
