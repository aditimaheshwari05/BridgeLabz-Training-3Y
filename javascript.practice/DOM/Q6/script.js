const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    const rows = studentTable.querySelectorAll("tr");
    let visibleCount = 0;

    rows.forEach(row => {
        const rowData = row.textContent.toLowerCase();

        if (rowData.includes(searchValue)) {
            row.style.display = "";
            visibleCount++;
        } else {
            row.style.display = "none";
        }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
});