import React, { Component } from 'react'
import { randomColor } from './Helpers'
import './Box.css'
class Box extends Component {
    constructor(props){
        super(props);
        this.state={
            color:this.props.color,
        }
    }
    clickHandle=()=>{
        this.setState({
            color:randomColor()
        })
    }
    render() {
        return (
            <div onClick={this.clickHandle} style={{ backgroundColor: this.state.color }} className='Box'></div>
        )
    }
}
export default Box