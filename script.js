
//Theme toggle

if (document.cookie == '') {
  document.cookie = "light=true";
}

var style = document.getElementById("style");
var light = document.cookie;

function themeChange(light) {

  if (light) {
    var style = "https://project-grid-gallery-theccgameing.classof2025.repl.co/styles/light.css";
    var img = "https://project-grid-gallery-theccgameing.classof2025.repl.co/images/Night.png";
  } else {
    var style = "https://project-grid-gallery-theccgameing.classof2025.repl.co/styles/dark.css";
    var img = "https://project-grid-gallery-theccgameing.classof2025.repl.co/images/Day.png";
  }
  
  document.getElementById("style").setAttribute("href", style);
  document.getElementById("toggle").setAttribute("src", img);

  console.log(document.cookie);

}

function initiate() {
  var toggle = document.getElementById("toggle");
  themeChange(document.cookie);
  
  toggle.onclick = function() {
    themeChange(document.cookie);
    document.cookie = updateCookie(document.cookie);
  };
  
}

function updateCookie(cookie) {
  light = !light;
  return "light=" + light;
}

//Slideshow


console.log(document.cookie.valueOf("light"))

window.onload = initiate;