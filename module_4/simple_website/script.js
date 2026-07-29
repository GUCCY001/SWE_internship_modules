function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();   // ✅ FIX (removes empty spaces)

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    li.setAttribute("tabindex", "0");   // ✅ ADD (keyboard focus)

    // Mark complete on click
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}