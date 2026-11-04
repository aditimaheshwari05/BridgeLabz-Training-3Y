const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxLength = 100;

message.addEventListener("keydown", function (event) {
    const selectedLength = message.selectionEnd - message.selectionStart;

    if (message.value.length >= maxLength &&
        selectedLength === 0 &&
        event.key.length === 1) {
        event.preventDefault();
    }
});

message.addEventListener("input", function () {
    if (message.value.length > maxLength) {
        message.value = message.value.slice(0, maxLength);
    }

    const remaining = maxLength - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.className = "";

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    } else if (remaining === 0) {
        counter.classList.add("danger");
    }
});

resetButton.addEventListener("click", function () {
    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.className = "";
});