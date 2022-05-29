import React, { createContext } from 'react';
import useToggle from '../Hooks/useToggle';


const ThemeContext = createContext();
function ThemeProvider(props) {
    const [isLightTheme, toggleTheme] = useToggle(true);
    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext };