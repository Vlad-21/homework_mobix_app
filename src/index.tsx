import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from "./services/context";
import todoListStore from "./store/todo-list.store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <StoreContext.Provider value={todoListStore}>
          <App />
      </StoreContext.Provider>
  </React.StrictMode>
);

