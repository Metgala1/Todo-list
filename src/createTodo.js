import { dateInput, descriptionInput, taskData, titleInput } from "./second";

export class Todo{
    constructor(title, date, description){
        this.id = `${title.split(" ").join("-")}-${Date.now()}`
        this.title = title;
        this.date = date;
        this.description = description
    }
}

export function createTodo(title, date, description){
    const todo = new Todo(title, date, description)
     taskData.unshift(todo)
}