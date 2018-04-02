function Task(name) {
    this.name = name;
}

function showModal() {
    var modal = document.getElementById("taskModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("taskModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function addNewTask() {
    var taskName = document.getElementById("task_name").value;
    updateTaskList([new Task(taskName)]);
    closeModal();
}

function updateTaskList(tasks) {
    var taskList = document.getElementById("task_list");

    for(var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        taskList.innerHTML += '<div class="task" onclick="confirmComplete(this)"><p>' + task.name + '</p><button class="complete">✔</button></div>';
    }
}

function confirmComplete(confirmButton) {
    var result = window.confirm("Are you sure you want to mark this task as completed?");

    if(result === true) {
        confirmButton.parentNode.removeChild(confirmButton);
    }
}

function updateProgress(active) {
    var progressBoxes = document.getElementsByClassName("progress");
    for(var i = 0; i < progressBoxes.length; i++) {
        var progressBox = progressBoxes[i];
        progressBox.classList.remove("active");
    }

    active.classList.add("active");

}

var task1 = new Task("Task 1");
var task2 = new Task("Task 2");
var task3 = new Task("Task 3");
var task4 = new Task("Task 4");
var task5 = new Task("Task 5");

updateTaskList([task1, task2, task3, task4, task5]);

