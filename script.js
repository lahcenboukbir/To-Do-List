// Selecting HTML elements by their IDs
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

// Adding a click event listener to the button, calling the addTask function when clicked
button.addEventListener("click", addTask);

// Function to add a task to the list
function addTask() {
  // Checking if the input value is not empty or contains only whitespace
  if (input.value.trim() !== "") {
    // Creating a new list item (li) element
    let li = document.createElement("li");
    // Setting the inner HTML of the list item to the input value
    li.innerHTML = input.value;
    // Appending the list item to the task list
    list.appendChild(li);

    // Creating a new span element
    let span = document.createElement("span");
    // Setting the inner HTML of the span to the 'x' character
    span.innerHTML = "\u00d7";
    // Appending the span to the list item
    li.appendChild(span);
  } else {
    // Alerting the user if the input is empty
    alert("You must write something!");
  }
  // Clearing the input value
  input.value = "";
  // Saving the updated task list to local storage
  saveData();
}

// Adding a click event listener to the task list
list.addEventListener("click", (event) => {
  // Checking if the clicked element is an LI (list item)
  if (event.target.tagName === "LI") {
    // Toggling the "checked" class for the clicked LI element
    event.target.classList.toggle("checked");
    // Saving the updated task list to local storage
    saveData();
  } else if (event.target.tagName === "SPAN") {
    // Removing the parent LI element if the clicked element is a SPAN
    event.target.parentElement.remove();
    // Saving the updated task list to local storage
    saveData();
  }
});

// Function to save the task list to local storage
function saveData() {
  localStorage.setItem("Data", list.innerHTML);
}

// Function to load tasks from local storage when the script runs initially
function getData() {
  list.innerHTML = localStorage.getItem("Data");
}

// Calling the getData function to load initial tasks from local storage
getData();
