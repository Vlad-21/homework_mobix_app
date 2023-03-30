import React, {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import './HomePage.css';
import TodoItem from "../../components/TodoItem/TodoItem";
import CreateTodoModal from "../../components/CreateTodoModal/CreateTodoModal";
import todoListStore from "../../store/todo-list.store";
import StoreContext from "../../services/context";

const HomePage: React.FC = observer(() => {
    const todosStore = useContext(StoreContext);
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleCreateClick = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="c-home-container">
            <h1 className="c-home-title">Todos List</h1>
            <button onClick={handleCreateClick} className="c-home-button-add-todo">Add todo</button>
            {todosStore.todos.map((item) => (
                <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed}/>
            ))}
            {showModal && <CreateTodoModal closeModal={handleCreateClick} />}
        </div>
    );
});

export default HomePage;