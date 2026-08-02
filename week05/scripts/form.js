const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Time Circuits" },
    { id: "ac-2000", name: "Low Voltage Reactor" },
    { id: "jj-1969", name: "Warp Equalizer" }
];

document.addEventListener("DOMContentLoaded", () => {

    const year = document.getElementById("currentyear");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const modified = document.getElementById("lastModified");
    if (modified) {
        modified.textContent = document.lastModified;
    }

    const productSelect = document.getElementById("product");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    const reviewCount = document.getElementById("reviewCount");

    if (reviewCount) {
        let count = Number(localStorage.getItem("reviewCount")) || 0;
        count++;

        localStorage.setItem("reviewCount", count);
        reviewCount.textContent = count;
    }
});