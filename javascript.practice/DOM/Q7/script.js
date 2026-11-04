const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function (event) {
    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;
});

mouseBox.addEventListener("dblclick", function (event) {
    const rect = mouseBox.getBoundingClientRect();

    const dot = document.createElement("div");

    dot.className = "dot";

    dot.style.left = (event.clientX - rect.left) + "px";
    dot.style.top = (event.clientY - rect.top) + "px";

    mouseBox.appendChild(dot);
});