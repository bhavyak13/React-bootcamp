import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    colors: {
        backgroundColor: "#dae1e4",
        height:'150px',
        width:'100%',
        marginBottom:'0.5rem',
        borderRadius:'5px',
        overflow:'hidden',
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display:'inline-block',
        margin:'0 auto',
        position:'relative',
        marginBottom:'-5.5px'
    }
})

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