const addBtn = document.querySelector('.add-task');
const taskInput = document.querySelector('.input-task');
const taskList = document.querySelector('.task-list');


addBtn.addEventListener('click', addTask);

window.addEventListener('keydown', (e) => {
    
    if (e.keyCode === 13 && taskInput.value !== "") {
        addTask();
    } else {
        return;
    }
})

function addTask() {
    const completeBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const taskContainer = document.createElement("div");
    const taskBtnContainer = document.createElement("div");
    const taskInfo = document.createElement("span");

    taskList.append(taskContainer);
    taskContainer.classList.add('task-list__item');

    taskInfo.innerText = taskInput.value;
    taskContainer.append(taskInfo);
    taskInfo.classList.add('task-list__info');

    taskContainer.append(taskBtnContainer);

    taskBtnContainer.append(completeBtn);
    completeBtn.classList.add("complete-btn");

    const completeIcon = document.createElement("i");
    completeBtn.append(completeIcon);
    completeIcon.classList.add("fas", "fa-solid", "fa-check", "complete-icon");

    taskBtnContainer.append(delBtn);
    delBtn.classList.add("del-btn");

    const delIcon = document.createElement("i");
    delBtn.append(delIcon);
    delIcon.classList.add("fas", "fa-solid", "fa-trash", "delete-icon");

    taskInput.value = "";
}

document.addEventListener('click', (e) => {
    if (e.target.matches('.complete-icon')) {
        e.path[3].style.backgroundColor = "rgba(128, 128, 128, 0.8)";
        e.path[3].firstChild.style.textDecoration = "line-through";
    }

    if (e.target.matches('.complete-btn')) {
        e.path[2].style.backgroundColor = "rgba(128, 128, 128, 0.8)";
        e.path[2].firstChild.style.textDecoration = "line-through";
    }

    if (e.target.matches('.delete-icon')) {
        e.path[3].remove();
        e.path[3].remove();
    }

    if (e.target.matches('.del-btn')) {
        e.path[2].remove();
        e.path[2].remove();
    }

});
