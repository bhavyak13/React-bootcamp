import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Lays.css';
class Lays extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="Lays" style={{ backgroundImage: 'url("https://media.istockphoto.com/photos/potato-chips-picture-id185090899?b=1&k=20&m=185090899&s=170667a&w=0&h=UsKvNJMULB7s4V6YvaZ5tGedEX-DY9Z228IyePa837k=")' }}>
                <Link style={{color:'black'}} to='/'>Go Back!</Link>
            </div>
        )
    }
}
export default Lays