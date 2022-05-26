import React from 'react';
import { ChromePicker } from 'react-color';


function ColorPicker(props) {
    const {setColor} = props;
    
    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };
    return (
        <ChromePicker
            color={props.color}
            onChangeComplete={handleChangeComplete}
        />
    )
}

export default ColorPicker;