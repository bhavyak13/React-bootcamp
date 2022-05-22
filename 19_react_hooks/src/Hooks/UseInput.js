import { useState } from 'react'
function UseInput(initialValue = '') {
    const [property, setProperty] = useState(initialValue);
    function changeHandler(e) {
        setProperty(e.target.value);
    }
    function reset() {
        setProperty('');
    }
    return [property, changeHandler, reset];
}
export default UseInput;