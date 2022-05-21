import React, { Component } from 'react'
import './Dog.css';
class Dog extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                <h1>Doggy</h1>
                <img src='https://images.unsplash.com/photo-1601880348117-25c1127a95df?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500'/>
            </div>
        )
    }
}
export default Dog