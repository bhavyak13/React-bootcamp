import React, { createContext, useState } from 'react'
const TodosContext = createContext();
const TodosProvider = (props) => {
    const initialTodos = [
        { id: '1', task: 'get some water to plants', edit: false, completed: false },
        { id: '2', task: 'Go to temple', edit: false, completed: true },
    ]
    const [todos, setTodos] = useState(initialTodos);
    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {props.children}
        </TodosContext.Provider>
    )
}
export { TodosContext, TodosProvider }