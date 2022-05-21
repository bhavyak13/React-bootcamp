import React, { Component } from 'react'
import './Chocolate.css';
import {Link} from 'react-router-dom'
class Chocolate extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                <Link to='/'>Go Back!</Link>
            </div>
        )
    }
}
export default Chocolate