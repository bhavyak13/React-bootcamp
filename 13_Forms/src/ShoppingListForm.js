import React, { Component } from 'react'
class ShoppingListForm extends Component {
    state = {
        name: '',
        qty: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name: '', qty: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input name='name' id='name' type="text" placeholder='name' onChange={this.handleChange} value={this.state.name} />
                <br />
                <label htmlFor='qty'>Qty:</label>
                <input name='qty' id='qty' placeholder='quantity' type='number' onChange={this.handleChange} value={this.state.qty} />
                <br />
                <button>Submit!</button>
            </form>
        )
    }
}
export default ShoppingListForm;