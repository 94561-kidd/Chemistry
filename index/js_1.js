const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("docname")) {
  document.getElementById("doc").src =
    "./" + urlParams.get("docname") + ".html";

  var selected_button = document.getElementById(urlParams.get("docname"));
  selected_button.style.background = "#f3f2ee";
  selected_button.style.color = "#333333";
  selected_button.disabled = true;
}

function changeSrc(target) {
  document.getElementById("doc").src = "./" + target + ".html";
  location.href =
    "https://94561-kidd.github.io/Chemistry/index.html?docname=" + target;
}
