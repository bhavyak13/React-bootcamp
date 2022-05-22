import React, { useState } from 'react'
function Example() {
    const [count, setCount] = useState(0);
    /* 
        Use state : hook that lets you add react state to function Cmomponents!
        1. the piece of state.
        2. function to update that piece of state.
        
        What does useState return?
        -> It returns a pair of values: the current state and a function that updates it.
           This is why we write const [count, setCount] = useState(). 
           This is similar to this.state.count and this.setState in a class,
           except you get them in a pair.
    */
    const [place, setplace] = useState('India')
    return (
        <div>
            <h1>times you clicked this button : {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Click Me!</button>
            <p>{place}</p>
        </div>
    )
}
export default Example;