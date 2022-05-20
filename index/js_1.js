const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("docname")) {
  document.getElementById("doc").src = "./" + urlParams.get("docname") + ".html";
}

function changeSrc(target) {
  document.getElementById("doc").src = "./" + target + ".html";
  location.href =
    "https://94561-kidd.github.io/Chemistry/index.html?docname=" + target;
}
