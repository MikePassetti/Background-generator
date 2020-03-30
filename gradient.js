var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var random = document.getElementById("random");


function setGradient () {
    gradient.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";   
    css.textContent = gradient.style.background + ";";
}

var randomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
}

function setRandomGradient () {
    gradient.style.background = 
    "linear-gradient(to right, " 
    + randomColor() 
    + ", " 
    + randomColor() 
    + ")";   
    css.textContent = gradient.style.background + ";";
}

color1.addEventListener("input", setGradient);   // don't need to trigger () the event because it gets triggered automatically by the input
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomGradient);
