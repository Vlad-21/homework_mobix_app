import React, {useContext} from "react";
import {ITodo} from "../../interfaces/todo.interface";
import './TodoItem.css';
import StoreContext from "../../services/context";

const TodoItem: React.FC<ITodo> = ({id, text, completed}) => {
    const todoStore = useContext(StoreContext);

    const handleDeleteClick = () => {
        todoStore.removeTodo(id);
    }
    const handleTodoClick = () => {
        todoStore.toggleTodo(id);
    }
    return (
        <div className="c-todo-item">
            <p className="c-todo-item-text">{text}</p>
            <div className="c-todo-item-button-container">
                <div onClick={handleTodoClick} className="c-todo-item-button-border">
                    {completed && <div className="c-todo-item-button"></div>}
                </div>
                <button onClick={handleDeleteClick} className="c-todo-item-delete">X</button>
            </div>
        </div>
    );
}

export default TodoItem;