var a = document.getElementsByClassName("increase")[0];
var b = document.getElementsByClassName("reset")[0];
var c = document.getElementsByClassName("decrease")[0];
var n = document.getElementsByClassName("number")[0];
var x = 0;

function color_of_text(x) {
  if (x > 0) {
    n.style.color = "rgb(72,255,0)";
  } else if (x < 0) {
    n.style.color = "rgb(255,0,0)";
  } else {
    n.style.color = "black";
  }
}

function increase() {
  ++x;
  color_of_text(x);
  n.innerHTML = x;
  n.style.transition = "color 0.7s";
}

function reset() {
  x = 0;
  color_of_text(x);
  n.innerHTML = x;
}

function decrease() {
  --x;
  color_of_text(x);
  n.innerHTML = x;
}

a.onclick = increase;
b.onclick = reset;
c.onclick = decrease;
