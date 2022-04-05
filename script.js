const addBtn = document.querySelector('.add-task');
const addIcon = document.querySelector('.add-icon');
const taskInput = document.querySelector('.input-task');
const taskList = document.querySelector('.task-list');


//Keys for items stored in the local storage of the browser
let keys = Object.keys(localStorage);

addBtn.addEventListener('click', addTask);
addIcon.addEventListener('click', addTask);


//When enter button is pressed it adds a task to the task list
window.addEventListener('keydown', (e) => {
    
    if (e.keyCode === 13 && taskInput.value !== "") {
        addTask();
    } else {
        return;
    }
})

//Adding tasks with the div, buttons and all other elements that make up a task item, adds classes to these elements aswell so they are styled directly from the CSS file.
function addTask() {
    if (taskInput.value === "") {
        return;
    }

    if (taskInput.value.length > 35) {
        alert("Too many characters! Please write the tasks with a maximum of 35 characters, spaces count as a character!");
        return;
    }

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
    taskBtnContainer.classList.add('task-btn-container')

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

    //Calling the save function i created, i stored the keyValue and keyName as the same thing so i can delete/remove it easily (this is done below in complete and delete button event listener)
    saveTask(taskInfo.innerText, taskInfo.innerText);

}

//Saving to local storage on browser
function saveTask(name, value) {
    localStorage.setItem(name, value);
}

//When the 'complete' or 'delete' buttons are pressed, we use event delegation to capture event as these elements are not present in our index.html file
//Rather we add these elements through our JS code so we must use event delegation. Event delegation is simply checking if the element we are capturing the certain event
//Certain event such as 'click' etc, if it matches the specific CSS selector we pass it, if it does then it will execute the code we write.
document.addEventListener('click', (e) => {
    if (e.target.matches('.complete-icon')) {
        e.path[3].style.backgroundColor = "rgba(128, 128, 128, 0.8)";
        e.path[3].firstChild.style.textDecoration = "line-through";
        localStorage.removeItem(e.path[3].firstChild.innerText);
    }

    if (e.target.matches('.complete-btn')) {
        e.path[2].style.backgroundColor = "rgba(128, 128, 128, 0.8)";
        e.path[2].firstChild.style.textDecoration = "line-through";
        localStorage.removeItem(e.path[2].firstChild.innerText);
    }

    if (e.target.matches('.delete-icon')) {
        e.path[3].remove();
        e.path[3].remove();
        localStorage.removeItem(e.path[3].firstChild.innerText);
    }

    if (e.target.matches('.del-btn')) {
        e.path[2].remove();
        e.path[2].remove();
        localStorage.removeItem(e.path[2].firstChild.innerText);
    }

});

function retrieveTasks() {
    
    //Gives us the number of items stored in the local storage
    j = keys.length

    //Loop through for every item stored in local storage and add all the elements such as div, buttons etc again aswell as the task info.
    for (let i=0; i<j; i++) {
        const getTask = localStorage.getItem(keys[i]);
        const completeBtn = document.createElement("button");
        const delBtn = document.createElement("button");
        const taskContainer = document.createElement("div");
        const taskBtnContainer = document.createElement("div");
        const taskInfo = document.createElement("span");

        taskList.append(taskContainer);
        taskContainer.classList.add('task-list__item');

        taskInfo.innerText = getTask;
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

}

retrieveTasks();