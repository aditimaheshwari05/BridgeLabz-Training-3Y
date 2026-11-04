const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");

let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    backButton.style.display = currentStep === 0 ? "none" : "inline";
    nextButton.textContent = currentStep === 2 ? "Submit" : "Next";
}

function validateStep() {
    const input = steps[currentStep].querySelector("input");

    if (input.value.trim() === "") {
        alert("Please enter " + input.id);
        return false;
    }

    if (input.id === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        alert("Please enter a valid email");
        return false;
    }

    if (input.id === "password" && input.value.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    return true;
}

nextButton.addEventListener("click", function () {
    if (!validateStep()) return;

    if (currentStep < 2) {
        currentStep++;
        showStep();
    } else {
        summary.style.display = "block";

        summary.innerHTML = `
            <h3>Registration Summary</h3>
            <p>Name: ${document.getElementById("name").value}</p>
            <p>Email: ${document.getElementById("email").value}</p>
            <p>Password: ******</p>
            <h3>Form Completed Successfully!</h3>
        `;

        steps.forEach(step => step.style.display = "none");
        backButton.style.display = "none";
        nextButton.style.display = "none";
    }
});

backButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();