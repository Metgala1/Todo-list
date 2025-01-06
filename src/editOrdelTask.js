import { currentTask, dateInput, descriptionInput, taskData, taskForm, titleInput } from "./second";

export function editTask(buttonEl){
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id)
    currentTask = taskData[dataArrIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    taskForm.classList.toggle("hidden")
}

export function deleteTask(buttonEl){
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    taskData.splice(dataArrIndex, 1);

    buttonEl.parentElement.remove()
}