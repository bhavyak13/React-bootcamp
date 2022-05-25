import React from 'react'
import useStyles from './Styles/MiniPaletteColorsStyles';

const MiniPaletteColors = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.colors}>
            {props.colors.map(color => (
                <div
                    className={classes.miniColor}
                    style={{ backgroundColor: color.color }}
                    key={color.name}
                >
                </div>
            ))}
        </div>
    )
}
export default MiniPaletteColors;