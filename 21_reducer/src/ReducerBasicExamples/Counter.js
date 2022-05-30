/*
useReducer:
An alternative to useState.
Accepts a reducer of type : 
(state, action)=> newState,
and returns the current state paired with a dispatch method. 
*/


import React, { useReducer } from 'react'
// const reducer = (state, action) => {
//     if (action.type === 'INCREMENT') return { count: state.count + 1 };
//     if (action.type === 'DECREMENT') return { count: state.count - 1 };
// }
//or 
const reducer = (state, action) => {
    switch (action.type) {
        case ('INCREMENT'):
            return ({ count: state.count + action.amount });
        case ('DECREMENT'):
            return ({ count: state.count - 1 });
        case ('RESET'):
            return { count: 0 }
        default:
            break;
    }
}

const Counter = () => {
    const initialState = {
        count: 0,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => { dispatch({ type: 'INCREMENT', amount: 1 }) }}>ADD 1</button>
            <button onClick={() => { dispatch({ type: 'INCREMENT', amount: 5 }) }}>ADD 5</button>
            <button onClick={() => { dispatch({ type: 'DECREMENT', }) }}>Subtract 1</button>
            <button onClick={() => { dispatch({ type: 'RESET' }) }}>RESET</button>
        </div>
    )
}

export default Counter;