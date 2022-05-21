import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import EditTodoForm from './EditTodoForm'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodoForm = this.editTodoForm.bind(this);
        this.completed = this.completed.bind(this);
    }
    addTodo(todo) {
        const newTodo = { ...todo, id: uuid(), editForm: false, isCompleted: false };
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo],
        }))
    }
    removeTodo(id) {
        this.setState(prevState => ({
            todos: prevState.todos.filter(e => (e.id !== id))
        }))
    }
    editTodoForm(id) {
        //enables Todo form display!
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.editForm = true;
            }
            return todo;
        })
        this.setState({
            todos: newTodos,
        })
    }
    updateTodo = (todo) => {
        const newTodos = this.state.todos.map(e => {
            if (e.id === todo.id) {
                e.editForm = false
            }
            return e;
        })
        this.setState({
            todos: newTodos
        })
    }
    completed(id) {
        const newTodos = this.state.todos.map(e => {
            if (e.id === id) {
                e.isCompleted = true;
            }
            return e;
        })
        this.setState({
            todos: newTodos,
        })
    }
    render() {
        return (
            <div>
                <h1>Todos!</h1>
                {this.state.todos.map(e => (
                    <div key={e.id}>
                        <Todo
                            removeTodo={this.removeTodo}
                            todoObj={e}
                            editTodoForm={this.editTodoForm}
                            completed={this.completed}
                        />
                        {e.editForm
                            ? <EditTodoForm
                                todoObj={e}
                                updateTodo={this.updateTodo} />
                            : null
                        }
                    </div>
                ))}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}
export default TodoList;