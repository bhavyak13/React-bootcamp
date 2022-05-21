import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Milk', qty: '2',id:uuidv4() },
                { name: 'butter', qty: '34' ,id:uuidv4()},
            ],
        }
    }
    addItem = (item) => {
        let newItem={...item,id:uuidv4()}
        this.setState((prevState) => ({
            items: [...prevState.items, newItem],
        }))
    }
    render() {
        return (
            <div>
                <h1>Shopping List!</h1>
                <ul>
                    {this.state.items.map(e => {
                        return (
                            <li key={e.id}>
                                {e.name}:{e.qty}
                            </li>
                        )
                    })}
                </ul>
                <ShoppingListForm addItem={this.addItem} />
            </div>
        )
    }
}
export default ShoppingList;