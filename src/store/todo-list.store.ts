import { makeAutoObservable } from "mobx";
import {ITodo} from "../interfaces/todo.interface";


class TodoListStore {
    todos: Array<ITodo> = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text: string) {
        this.todos.push({ id: Date.now(), text, completed: false });
    }


    toggleTodo(id: number) {
        this.todos.forEach((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
        });
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter((item) => item.id !== id);
    }
}

const todoListStore = new TodoListStore();
export default todoListStore;