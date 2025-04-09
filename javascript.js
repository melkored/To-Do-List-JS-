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
let appendItems = function () {
  for (let i = 0; i < toDoList.length; i++) {
    let listItem = document.createElement("div");
    listItem.classList.add("single-task");
    listItem.id = `task-${i}`;
    let itemTitle = document.createElement("span");
    itemTitle.innerHTML = toDoList[i];

    listItem.append(itemTitle);
    createListElement.append(listItem);
  }
};

// Set Items to local storage
let setToLocalStorage = function (list) {
  let listToString = toString(list);
  localStorage.setItem("toDoList", listToString);
};

// Add new element to local storage
let addNewTaskToList = function (newItem) {
  if (toDoList) {
    toDoList.push(newItem);
    setToLocalStorage(toDoList);
  } else {
    let newArray = new Array(newItem);
    setToLocalStorage(newArray);
  }
};

// Get Existing div element
let toDoListBody = document.getElementById("toDoListBody");

// Create Basic Elements and added features
// // -Form
let createForm = document.createElement("form");

// // - Add Button
let createBasicButton = document.createElement("button");
createBasicButton.innerText = "Agregar Tarea";

// // - Task Input
let createTaskInput = document.createElement("input");
createTaskInput.placeholder = "Nombre de tarea";
createTaskInput.id = "new-task";

// // - Content div
let createContentDiv = document.createElement("div");
createContentDiv.classList.add("tasks-list-div");

// // - List Element
let createListElement = document.createElement("div");
createListElement.classList.add("complete-task-list");
createListElement.id = "complete-task-list";

// Append components

// Append to the DOM

toDoListBody.append(createForm);

createForm.append(createTaskInput);

createForm.append(createBasicButton);

// // - Add tasks list if there´s items in it
if (toDoList) {
  toDoListBody.append(createContentDiv);
  createContentDiv.append(createListElement);
  appendItems();
}

// Event Listeners

let addTask = function (event) {
  event.preventDefault();
  let newTaskTitle = document.getElementById("new-task").value;
  addNewTaskToList(newTaskTitle);
  let completeTasksList = document.getElementById("complete-task-list");
  completeTasksList.replaceChildren();
  appendItems();
};

// Add event listeners
createBasicButton.addEventListener("click", addTask);
