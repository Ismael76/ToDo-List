const addBtn = document.querySelector('.add-task');
const taskInput = document.querySelector('.input-task');
const taskList = document.querySelector('.task-list__items');

addBtn.addEventListener('click', () => {
    const taskItem = document.createElement("li");

    taskItem.innerText = taskInput.value;

    taskList.append(taskItem);

    taskInput.value = "";
})