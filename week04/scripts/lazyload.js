// Display last modified date in footer
document.addEventListener("DOMContentLoaded", () => {
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent =
    "Last Modified: " + lastModified;
});
