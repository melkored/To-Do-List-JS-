// Get Existing div element
let toDoListBody = document.getElementById("toDoListBody");

// Create Basic Elements and added features
let basicButton = document.createElement("button");
basicButton.innerText = "Agregar Tarea";

let emptyTable = document.createElement();

// Append to the DOM

toDoListBody.append(basicButton);

const addTask = function () {
  console.log("inside");
};
basicButton.addEventListener("click", addTask);
