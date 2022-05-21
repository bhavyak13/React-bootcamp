import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`You typed ${this.state.username}`)
        this.setState({
            username: '',
            email: '',
            password: '',
        })
    }
    render() {
        return (
            <div>
                <h1>Form Demo!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' value={this.state.username} id="username" onChange={this.handleChange} name='username' placeholder='username' />
                    <br />
                    <input type='email' value={this.state.email} onChange={this.handleChange} name='email' placeholder='email' />
                    <br />
                    <input type='password' value={this.state.password} onChange={this.handleChange} name='password' placeholder='password' />
                    <br />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}
export default Form;