import React from 'react'
import { TodoHelpersProvider } from './Contexts/TodoHelpersContext';
import { TodosProvider } from './Contexts/TodosContext';
import Navbar from './Navbar';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

function TodoApp() {
    return (
        <div>
            <Navbar />
            <TodosProvider>
                <TodoHelpersProvider>
                    <NewTodoForm />
                    <TodoList />
                </TodoHelpersProvider>
            </TodosProvider>
        </div>
    )
}

export default TodoApp;