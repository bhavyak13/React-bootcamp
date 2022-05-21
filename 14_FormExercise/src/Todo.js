import React, { Component } from 'react'
class Todo extends Component {
    handleClick = () => {
        this.props.removeTodo(this.props.todoObj.id);
    }
    editTodoForm = () => {
        this.props.editTodoForm(this.props.todoObj.id);
    }
    completed = () => {
        this.props.completed(this.props.todoObj.id);
    }
    render() {
        return (
            <div>
                <p
                    style={{
                        display: 'inline-block',
                        cursor: (this.props.todoObj.isCompleted) ? '' : 'pointer',
                        textDecoration: (this.props.todoObj.isCompleted) ? 'line-through' : '',
                    }}
                    onClick={this.completed}
                >{this.props.todoObj.todo}</p>
                <button onClick={this.handleClick}>X</button>
                <button
                    disabled={this.props.todoObj.isCompleted}
                    onClick={this.editTodoForm}
                >Edit</button>
                {/* <button
                    onClick={this.completed}
                    disabled={this.props.todoObj.isCompleted}
                >Completed</button> */}
            </div >
        )
    }
}
export default Todo;