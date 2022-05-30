import React, { createContext, useReducer } from 'react'
import TodoReducer from '../TodoReducers/TodoReducer';

const TodosContext = createContext();
const dispatchContext = createContext();


const TodosProvider = (props) => {
    const initialTodos = [
        { id: '1', task: 'get some water to plants', edit: false, completed: false },
        { id: '2', task: 'Go to temple', edit: false, completed: true },
    ]
    const [todos, dispatch] = useReducer(TodoReducer, initialTodos);

    return (
        <TodosContext.Provider value={todos}>
            <dispatchContext.Provider value={dispatch}>
                {props.children}
            </dispatchContext.Provider>
        </TodosContext.Provider>
    )
}
export { TodosContext, TodosProvider, dispatchContext }