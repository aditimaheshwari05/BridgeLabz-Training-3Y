const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

let editingItem = null;

function saveEdit() {
    if (editingItem) {
        const input = editingItem.querySelector("input");
        const text = input.value.trim();

        if (text !== "") {
            editingItem.querySelector(".productName").textContent = text;
        }

        editingItem.querySelector("input").remove();
        editingItem.querySelector(".productName").style.display = "inline";

        editingItem = null;
    }
}

addButton.addEventListener("click", function () {
    const productName = productInput.value.trim();

    if (productName === "") return;

    saveEdit();

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="productName">${productName}</span>
        <button data-action="edit">Edit</button>
        <button data-action="delete">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

productList.addEventListener("click", function (event) {
    const action = event.target.dataset.action;
    const li = event.target.closest("li");

    if (!li) return;

    if (action === "delete") {
        if (editingItem === li) editingItem = null;
        li.remove();
    }

    if (action === "edit") {
        saveEdit();

        editingItem = li;

        const span = li.querySelector(".productName");
        const input = document.createElement("input");

        input.value = span.textContent;
        span.style.display = "none";

        li.insertBefore(input, span);
        input.focus();
    }
});

document.addEventListener("click", function (event) {
    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit();
    }
});