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
  selected_style();
}

function selected_style() {
  document.title = "化學 * " + document.getElementById(docstr).innerHTML;

  var selected_button = document.getElementById(docstr);
  selected_button.style.background = "#f3f2ee";
  selected_button.style.color = "#333333";
  selected_button.disabled = true;
}
