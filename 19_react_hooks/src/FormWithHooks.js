import React from 'react'
import UseInput from './Hooks/UseInput';
let FormHooks = () => {
    const [age, changeAgeHandler, resetAge] = UseInput('');
    return (
        <div>
            <h1>Your age is : {age}</h1>
            <label htmlFor='age'>Age: </label>
            <input id='age'
                value={age}
                onChange={changeAgeHandler}
            />
            <button onClick={resetAge}>Submit</button>
        </div>
    )
}
export default FormHooks;