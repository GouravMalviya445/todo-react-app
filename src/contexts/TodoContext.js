import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo Message',
            complete: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},   
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);