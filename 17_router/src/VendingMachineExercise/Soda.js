import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Soda.css';
class Soda extends Component {
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
export default Soda