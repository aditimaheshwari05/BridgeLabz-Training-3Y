const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const success = document.getElementById("success");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        success.textContent = "Form Submitted Successfully!";

        form.reset();

        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
    } else {
        success.textContent = "";
    }
});