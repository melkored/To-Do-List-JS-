const toString = function (content) {
  return JSON.stringify(content);
};

const toJson = function (content) {
  return JSON.parse(content);
};

// Get items from Local Storage
const completeStringToDoList = localStorage.getItem("toDoList");
const toDoList = toJson(completeStringToDoList);

const appendItems = function () {
  debugger;
  for (let i = 0; i < toDoList.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = toDoList[i];
    listElement.append(listItem);
  }
};

// Get Existing div element
let toDoListBody = document.getElementById("toDoListBody");

// Create Basic Elements and added features
// // - Add Button
let basicButton = document.createElement("button");
basicButton.innerText = "Agregar Tarea";

// // - Task Input
let taskInput = document.createElement("input");
taskInput.placeholder = "Nombre de tarea";

// // - Content div
let contentDiv = document.createElement("div");
contentDiv.classList.add("tasks-list");

// // - List Element
let listElement = document.createElement("ul");

// Append components

// Append to the DOM

toDoListBody.append(taskInput);

toDoListBody.append(basicButton);

// // - Add tasks list if there´s items in it
if (toDoList) {
  toDoListBody.append(contentDiv);
  contentDiv.append(listElement);
  appendItems();
}

// Event Listeners

const addTask = function () {
  console.log("inside");
};

// Add event listeners
basicButton.addEventListener("click", addTask);

console.log("List");
