var getUrlString = location.href;
var url = new URL(getUrlString);
document.getElementById("doc").src = "./" + url.searchParams.get("doc") + ".html";

function changeSrc(target) {
  var new_url =
    "https://94561-kidd.github.io/Chemistry/index.html?doc=" + target;


  location.href = new_url;
  
  document.getElementById("doc").src = "./" + target + ".html";
}
