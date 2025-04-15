let toString = function (content) {
  return JSON.stringify(content);
};

let toJson = function (content) {
  return JSON.parse(content);
};

// Get items from Local Storage
let completeStringToDoList = localStorage.getItem("toDoList");
let toDoList = toJson(completeStringToDoList);

// Render List Items
let renderListItems = function () {
  for (let i = 0; i < toDoList.length; i++) {
    // Create paren DIV
    let listItem = document.createElement("div");
    listItem.classList.add("single-task");
    listItem.id = `task-${i}`;

    // Create span title
    let itemTitle = document.createElement("span");
    itemTitle.classList.add("task-title");
    itemTitle.textContent = toDoList[i];

    // Create Clear button
    let clearButton = document.createElement("button");
    clearButton.id = "clear-btn";
    clearButton.name = "clear";
    clearButton.textContent = "Borrar";

    // Create Complete button
    let completeButton = document.createElement("button");
    completeButton.id = "complete-btn";
    completeButton.name = "complete";
    completeButton.textContent = "Completar";

    // Append created Elements in the DIV
    createListElement.append(listItem);
    listItem.append(itemTitle);
    listItem.append(completeButton);
    listItem.append(clearButton);
  }
};

// Get Existing div element
let toDoListBody = document.getElementById("toDoListBody");

// Create Basic Elements and added features
// // -Form
let createForm = document.createElement("form");

// // - Add Button
let createBasicButton = document.createElement("button");
createBasicButton.textContent = "Agregar Tarea";

// // - Task Input
let createTaskInput = document.createElement("input");
createTaskInput.placeholder = "Nombre de tarea";
createTaskInput.id = "new-task";

// // - Content div
let createContentDiv = document.createElement("div");
createContentDiv.classList.add("tasks-list-div");

// // - List Element
let createListElement = document.createElement("div");
createListElement.classList.add("all-task-list");
createListElement.id = "all-task-list";

// Append components

// Append to the DOM

toDoListBody.append(createForm);
createForm.append(createTaskInput);
createForm.append(createBasicButton);

// // Render tasks list if there´s items in it
if (toDoList) {
  toDoListBody.append(createContentDiv);
  createContentDiv.append(createListElement);
  renderListItems();
}

// Functions

// // Add new task
let addTaskAction = function (event) {
  event.preventDefault();
  let newTaskTitle = document.getElementById("new-task").value;
  // Add new task to the list
  addNewTaskToList(newTaskTitle);
  let completeTasksList = document.getElementById("all-task-list");
  // Remove all the children inside the task list div
  completeTasksList.replaceChildren();
  // Render the new list in inside the div
  renderListItems();
};

// // Set Items to local storage
let setToLocalStorage = function (list) {
  let listToString = toString(list);
  localStorage.setItem("toDoList", listToString);
};

// // Add new element to local storage
let addNewTaskToList = function (newItem) {
  if (toDoList) {
    toDoList.push(newItem);
    setToLocalStorage(toDoList);
  } else {
    let newArray = new Array(newItem);
    setToLocalStorage(newArray);
  }
};

// // Complete Task

let completeTaskAction = function (target) {
  target.parentNode.childNodes[0].classList.toggle("line");
};

// // Delete Task
let deleteTaskAction = function (target) {
  // Get current task text
  let selectedTaskName = target.parentNode.childNodes[0].innerText;
  // Gett current task array index
  let selectedTaskIndex = toDoList.indexOf(selectedTaskName);
  if (selectedTaskIndex !== -1) {
    toDoList.splice(selectedTaskIndex, 1);
    renderListItems();
  }
};

// // Task Actions
let taskActions = function (event) {
  let target = event.target;
  if (target.name === "complete") {
    completeTaskAction(target);
    // console.log("button", event.target.name);
    // console.log("button", event.target.parentNode.id);
    // console.log("button", event.target.parentNode.childNodes[0]);
  } else {
    deleteTaskAction(target);
    /// Aqui va el código para eliminar la tarea de la lista y de local
  }
};

// Add event listeners

createBasicButton.addEventListener("click", addTaskAction);
toDoListBody.addEventListener("click", taskActions);
