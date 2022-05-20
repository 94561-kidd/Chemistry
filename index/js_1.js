const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("docname")) {
  var docstr = urlParams.get("docname");

  document.getElementById("doc").src = `./${docstr}.html`;

  document.title = "化學 * " + document.getElementById(docstr).innerHTML;

  var selected_button = document.getElementById(urlParams.get("docname"));
  selected_button.style.background = "#f3f2ee";
  selected_button.style.color = "#333333";
  selected_button.disabled = true;
}

function changeSrc(target) {
  var new_url = `/Chemistry/index.html?docname=${target}`;
  window.history.pushState(null, "", new_url);
  document.getElementById("doc").src = "./" + target + ".html";
}
