import { makeStyles } from '@mui/styles';
import React from 'react';
import { ChromePicker } from 'react-color';

const useStyles = makeStyles({
    chromePicker:{
        width:'100% !important',
        marginTop:'1.5rem',
        marginBottom:'1rem'
    }
})

function ColorPicker(props) {
    const { setColor } = props;

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };
    const classes = useStyles(props);
    return (
        // <div className={classes.picker}>
            <ChromePicker
                color={props.color}
                onChangeComplete={handleChangeComplete}
                className={classes.chromePicker}
            />
        // </div>
    )
}

export default ColorPicker;