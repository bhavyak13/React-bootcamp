import React, { createContext, useContext } from 'react'
import { TodosContext } from './TodosContext';

let counter = 2;
const TodoHelpersContext = createContext();
const TodoHelpersProvider = (props) => {
    const { todos, setTodos } = useContext(TodosContext);
    const createNewTodo = task => {
        const id = counter + 1;
        counter++;
        const newTodo = { task, id, completed: false, edit: false };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    }
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    const toggleCompletion = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !(todo.completed);
            }
            return todo;
        });
        setTodos(newTodos);
    }
    const saveEditedTask = (newTodo) => {
        let newTodos = todos.map(todo => {
            if (todo.id === newTodo.id) {
                return { ...newTodo, edit: false }
            }
            return todo;
        });
        setTodos(newTodos);
    }
    const toggleEditForm = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.edit = !todo.edit;
            }
            return todo;
        })
        setTodos(newTodos);
    }
    return (
        <TodoHelpersContext.Provider value={{
            deleteTodo,
            toggleCompletion,
            saveEditedTask,
            toggleEditForm,
            createNewTodo,
        }}>
            {props.children}
        </TodoHelpersContext.Provider>
    )
}
export { TodoHelpersContext, TodoHelpersProvider }