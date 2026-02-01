const svg = document.getElementById("svg");
const clearBtn = document.getElementById("clearBtn");

let drawing = false;
let line;

svg.addEventListener("mousedown", function (event) {
  drawing = true;

  line = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );

  line.setAttribute("fill", "none");
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("points", event.offsetX + "," + event.offsetY);

  svg.appendChild(line);
});

svg.addEventListener("mousemove", function (event) {
  if (!drawing) return;

  let points = line.getAttribute("points");
  line.setAttribute(
    "points",
    points + " " + event.offsetX + "," + event.offsetY
  );
});

svg.addEventListener("mouseup", function () {
  drawing = false;
});

clearBtn.addEventListener("click", function () {
  svg.innerHTML = "";
});