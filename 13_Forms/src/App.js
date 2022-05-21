import React, { Component } from 'react'
import Form from './Form';
import './App.css'
import ShoppingList from './ShoppingList';
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Form/> */}
        <ShoppingList />
      </div>
    )
  }
}
export default App;