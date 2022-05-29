import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const PageContent = (props) => {
    const context = useContext(ThemeContext);
    const { isLightTheme } = context;
    const styles = {
        backgroundColor: (isLightTheme) ? 'white' : 'black',
        height: '100vh',
        width: '100vw',
    }
    return (
        <div style={styles}>{props.children}</div>
    )
}
export default PageContent;