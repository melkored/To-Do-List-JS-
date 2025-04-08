let toString = function (content) {
  return JSON.stringify(content);
};

let toJson = function (content) {
  return JSON.parse(content);
};

// Get items from Local Storage
let completeStringToDoList = localStorage.getItem("toDoList");
let toDoList = toJson(completeStringToDoList);

let appendItems = function () {
  debugger;
  for (let i = 0; i < toDoList.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = toDoList[i];
    listElement.append(listItem);
  }
};

// Add new element to local storage
let addNewTaskToList = function (newItem) {
  console.log("HERE", toDoList, newItem);
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
createContentDiv.classList.add("tasks-list");

// // - List Element
let listElement = document.createElement("ul");

// Append components

// Append to the DOM

toDoListBody.append(createForm);

createForm.append(createTaskInput);

createForm.append(createBasicButton);

// // - Add tasks list if there´s items in it
if (toDoList) {
  toDoListBody.append(contentDiv);
  contentDiv.append(listElement);
  appendItems();
}

// Event Listeners

let addTask = function (event) {
  event.preventDefault();
  let newTaskTitle = document.getElementById("new-task").value;
  addNewTaskToList(newTaskTitle);
};

// Add event listeners
createBasicButton.addEventListener("click", addTask);

console.log("List");
