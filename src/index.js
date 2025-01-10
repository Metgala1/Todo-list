import "./styles.css";

import {
  taskForm,
  openTaskFormBtn,
  tasksContainer,
  closeTaskFormBtn,
  confirmCloseDialog,
  discardBtn,
  cancelBtn,
  titleInput,
  dateInput,
  descriptionInput,
  taskData,
  reset,
} from "./second.js";

function editTask(buttonEl) {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id,
  );
  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  taskForm.classList.toggle("hidden");
}

function deleteTask(buttonEl) {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id,
  );
  taskData.splice(dataArrIndex, 1);

  buttonEl.parentElement.remove();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  class Todo {
    constructor(title, date, description) {
      this.id = `${title.split(" ").join("-")}-${Date.now()}`;
      this.title = title;
      this.date = date;
      this.description = description;
    }
  }

  function createTodo(title, date, description) {
    const todo = new Todo(title, date, description);
    taskData.unshift(todo);
  }

  function displayTask() {
    taskData.forEach((task) => {
      // Create a container element for the task
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.id = `${task.id}`;

      // Create elements for the task title, date, and description
      const titleElement = document.createElement("h2");
      titleElement.textContent = task.title;

      const dateElement = document.createElement("p");
      dateElement.textContent = `Due Date: ${task.date}`;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = task.description;

      // Create edit and delete buttons
      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.classList.add("btn");
      editButton.textContent = "Edit Task";

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.classList.add("btn");
      deleteButton.textContent = "Delete Task";

      // Append the elements to the task container
      taskElement.appendChild(titleElement);
      taskElement.appendChild(dateElement);
      taskElement.appendChild(descriptionElement);
      taskElement.appendChild(editButton);
      taskElement.appendChild(deleteButton);

      // Append the task container to the DOM
      tasksContainer.appendChild(taskElement);

      // Add event listeners to the edit and delete buttons
      editButton.addEventListener("click", () => {
        // Call a function to edit the task
        editTask(this);
      });

      deleteButton.addEventListener("click", () => {
        // Call a function to delete the task
        deleteTask(this);
      });
    });
  }

  function addOrUpdateTask() {
    createTodo(titleInput.value, dateInput.value, descriptionInput.value);
    displayTask();
  }

  addOrUpdateTask();
  taskForm.classList.toggle("hidden");
});
//createTodo("play ball", "01/01/2025", "Hello")
//displayTask()

openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});
closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});
discardBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
  confirmCloseDialog.close();
});
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});
//create todo
const hello = "hello";
