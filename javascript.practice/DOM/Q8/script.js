const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

dropdownButton.addEventListener("click", function () {
    options.classList.toggle("show");
});

options.addEventListener("click", function (event) {
    if (event.target.classList.contains("option")) {
        dropdownButton.textContent = event.target.textContent;
        options.classList.remove("show");
    }
});

document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        options.classList.remove("show");
    }
}, true);