import React, {useContext, useState} from "react";
import './CreateTodoModal.css';
import StoreContext from "../../services/context";

interface IModalProps {
    closeModal: () => void
}

const CreateTodoModal: React.FC<IModalProps> = ({closeModal}) => {
    const todoListStore = useContext(StoreContext);
    const [inputValue, setInputValue] = useState<string>('');

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);
    }
    const handleCreateClick = () => {
        todoListStore.addTodo(inputValue);
        closeModal();
    }
    return (
        <div className="m-create-todo-container">
            <div className="m-create-todo-modal">
                <div className="m-create-todo-close-button-container">
                    <div onClick={() => closeModal()} className="m-create-todo-close-button">X</div>
                </div>
                <div className="m-create-todo-info">
                    <input
                        className="m-create-todo-info-title"
                        type="text"
                        placeholder="Write your todo"
                        onChange={handleChangeInput}
                    />
                </div>
                <button className="m-create-todo-create-button" onClick={handleCreateClick}>Create Todo</button>
            </div>
        </div>
    );
};

export default CreateTodoModal;