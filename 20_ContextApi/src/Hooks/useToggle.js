import { useState } from 'react'
function useToggle(initialValue) {
    const [st, setSt] = useState(initialValue);
    const toggle = () => {
        setSt(!st);
    }
    return [st, toggle];
}
export default useToggle;