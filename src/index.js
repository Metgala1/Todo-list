import "./styles.css";

import{taskForm, openTaskFormBtn, closeTaskFormBtn, 
    confirmCloseDialog, discardBtn, cancelBtn,
    titleInput,
    dateInput,
    descriptionInput,
    taskData} from "./second.js"
import { addOrUpdateTask, displayTask } from "./addOrUpdate.js";
import { createTodo } from "./createTodo.js";


taskForm.addEventListener("submit", () => {
    createTodo(titleInput.value, dateInput.value, descriptionInput.value)
    addOrUpdateTask()
    alert(taskData[0].id)
  
    
  })
  createTodo("play ball", "01/01/2025", "Hello")
  displayTask()

openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden")
})
closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal()
})
discardBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden");
    confirmCloseDialog.close()
})
cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
})
//create todo 



