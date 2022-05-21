import React, { Component } from 'react'
class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            backgroundColor: '',
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
        this.props.addBox(this.state);
        this.setState({
            width: '',
            height: '',
            backgroundColor: '',
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='h'>Height : </label>
                <input id='h' name='height' placeholder='height' type='number' value={this.state.height} onChange={this.handleChange} />
                <label htmlFor='w'>Width : </label>
                <input id='w' name='width' placeholder='width' type='number' value={this.state.width} onChange={this.handleChange} />
                <label htmlFor='bc'>Background Color : </label>
                <input id='bc' name='backgroundColor' placeholder='backgroundColor' type='text' value={this.state.backgroundColor} onChange={this.handleChange} />
                <button>Add Box!</button>
            </form>
        )
    }
}
export default NewBoxForm;