import { createContext } from "react";
import todoListStore from "../store/todo-list.store";

const StoreContext = createContext(todoListStore);

export default StoreContext;