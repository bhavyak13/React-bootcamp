import React, { Component } from 'react'
class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            todo:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='todo'>Todo:</label>
                    <input id='todo' placeholder='Enter todo item here' type='text' name='todo' value={this.state.todo} onChange={this.handleChange} />
                    <button>Post!</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;