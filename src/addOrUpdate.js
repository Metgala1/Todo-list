import { taskData, tasksContainer } from "./second"

export function displayTask(){
    taskData.forEach((task) => {
        // Create a container element for the task
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.id = `${task.id}`
    
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
       tasksContainer.appendChild(taskElement)
    
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
    

export function addOrUpdateTask(){
    createTodo(titleInput.value, dateInput.value, descriptionInput.value)
    displayTask()

}