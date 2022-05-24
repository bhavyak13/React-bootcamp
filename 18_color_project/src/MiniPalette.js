import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import MiniPaletteColors from './MiniPaletteColors';



/*
The Hook API ( makeStyles/useStyles ) can only be used with function components.
The Higher-order component API ( withStyles ) can be used with
either class components or function components.
They both provide the same functionality,
and there is no difference in the styles parameter for withStyles and makeStyles.
*/






const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
        color: "black",
        // paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    }
})


function MiniPalette(props) {
    const classes = useStyles();
    const { id, emoji, paletteName, colors } = props;
    let navigate = useNavigate();
    const clickHandler=()=>{
        navigate(`palette/${id}`);
    }
    return (
        <div className={classes.root} onClick={clickHandler}>
            <MiniPaletteColors colors={colors} />
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}
export default MiniPalette;