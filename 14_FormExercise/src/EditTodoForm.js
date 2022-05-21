import React, { Component } from 'react'
class EditTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currTodo: this.props.todoObj,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const newTodo = this.state.currTodo;
        newTodo.todo = e.target.value;
        this.setState({
            currTodo: newTodo,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.state.currTodo);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='todo'>Todo Task : </label>
                    <input type='text' value={this.state.currTodo.todo} id='todo' name='todo'
                        onChange={this.handleChange} />
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
export default EditTodoForm;