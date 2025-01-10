export const taskForm = document.getElementById("task-form");
export const confirmCloseDialog = document.getElementById(
  "confirm-close-dialog",
);
export const openTaskFormBtn = document.getElementById("open-task-form-btn");
export const closeTaskFormBtn = document.getElementById("close-task-form-btn");
export const addOrUpdateTaskBtn = document.getElementById(
  "add-or-update-task-btn",
);
export const cancelBtn = document.getElementById("cancel-btn");
export const discardBtn = document.getElementById("discard-btn");
export const tasksContainer = document.getElementById("tasks-container");
export const titleInput = document.getElementById("title-input");
export const dateInput = document.getElementById("date-input");
export const descriptionInput = document.getElementById("description-input");

export const taskData = [];
export let currentTask = {};

export function reset() {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  tasksContainer.innerHTML = "";
}
