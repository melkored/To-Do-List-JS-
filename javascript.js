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
    // Create paren DIV
    let listItem = document.createElement("div");
    listItem.classList.add("single-task");
    listItem.id = `task-${i}`;

    // Create span title
    let itemTitle = document.createElement("span");
    itemTitle.classList.add("task-title");
    itemTitle.innerHTML = toDoList[i];

    // Create Clear button
    let clearButton = document.createElement("button");
    clearButton.id = "clear-btn";
    clearButton.name = "clear";
    clearButton.innerText = "Borrar Tarea";

    // Create Complete button
    let completeButton = document.createElement("button");
    completeButton.id = "complete-btn";
    completeButton.name = "complete";
    completeButton.innerText = "Completar Tarea";

    // Append created Elements in the DIV
    createListElement.append(listItem);
    listItem.append(itemTitle);
    listItem.append(completeButton);
    listItem.append(clearButton);
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
createListElement.classList.add("all-task-list");
createListElement.id = "all-task-list";

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
  let completeTasksList = document.getElementById("all-task-list");
  completeTasksList.replaceChildren();
  appendItems();
};

// Add event listeners
createBasicButton.addEventListener("click", addTask);
toDoListBody.addEventListener("click", (event) => {
  let target = event.target;
  if (target.name === "complete") {
    target.parentNode.childNodes[0].classList.toggle("line");
    // console.log("button", event.target.name);
    // console.log("button", event.target.parentNode.id);
    // console.log("button", event.target.parentNode.childNodes[0]);
  } else {
    /// Aqui va el código para eliminar la tarea de la lista y de local storage
  }
});
