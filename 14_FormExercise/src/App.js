import React, { Component } from 'react'
import './App.css';
import BoxList from './BoxList';
import TodoList from './Todolist';

class App extends Component {
  render() {
    return (
      <div className="Ap">
        {/* <BoxList/> */}
        <TodoList/>
      </div>
    );
  }
}

export default App;
