// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");

        // Create span to hold the task
        const span = document.createElement("span");
        span.textContent = taskText;
        li.appendChild(span);

        // Create delete button for the task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(deleteBtn);

        // Append task to the list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }
});

// Optional: You can also add functionality for pressing Enter key
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});
