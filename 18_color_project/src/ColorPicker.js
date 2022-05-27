import React from 'react';
import { ChromePicker } from 'react-color';
import useStyles from './Styles/ColorPickerStyles';

function ColorPicker(props) {
    const { setColor } = props;
    const classes = useStyles(props);

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };
    
    return (
        <ChromePicker
            color={props.color}
            onChangeComplete={handleChangeComplete}
            className={classes.chromePicker}
        />
    )
}

export default ColorPicker;