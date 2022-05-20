const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("doc")) {
  document.getElementById("doc").src = "./" + urlParams.get("doc") + ".html";
}

function changeSrc(target) {
  document.getElementById("doc").src = "./" + target + ".html";
}
