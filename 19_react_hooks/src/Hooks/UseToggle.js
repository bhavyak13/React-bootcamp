import { useState } from 'react';
function useToggle(initialValue = false) {
    const [property, setProperty] = useState(initialValue);
    const toggle = () => (
        setProperty(!property)
    )
    return [property, toggle];
}
export default useToggle;