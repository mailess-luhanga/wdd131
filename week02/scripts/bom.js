// Select elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Add Chapter button event
button.addEventListener("click", function () {

    // Get the user's input and remove extra spaces
    const chapter = input.value.trim();

    // Check if the input is not blank
    if (chapter !== "") {

        // Create a list item
        const li = document.createElement("li");

        // Create a delete button
        const deleteButton = document.createElement("button");

        // Add the chapter name to the list item
        li.textContent = chapter;

        // Configure the delete button
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", `Remove ${chapter}`);

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the unordered list
        list.append(li);

        // Delete the chapter when the delete button is clicked
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field
        input.value = "";

        // Return the cursor to the input field
        input.focus();

    } else {
        // Input is empty
        alert("Please enter a Book of Mormon chapter.");
        input.focus();
    }

});