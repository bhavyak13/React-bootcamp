import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MiniPaletteColors from './MiniPaletteColors';
import useStyles from './Styles/MiniPaletteStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteDialog from './DeleteDialog';

/*
The Hook API ( makeStyles/useStyles ) can only be used with function components.
The Higher-order component API ( withStyles ) can be used with
either class components or function components.
They both provide the same functionality,
and there is no difference in the styles parameter for withStyles and makeStyles.
*/

function MiniPalette(props) {

    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const { id, emoji, paletteName, colors } = props;

    let navigate = useNavigate();
    const clickHandler = () => {
        navigate(`palette/${id}`);
    }
    const deletePaletteHandler = (e) => {
        e.stopPropagation();
        setOpen(true);
    }
    const deletePaletteFinal = () => {
        props.deletePalette(id);
    }

    return (
        <div className={classes.root} onClick={clickHandler}>
            <DeleteIcon
                className={classes.deleteIcon}
                style={{ transition: "all 0.3s ease-in-out" }}
                onClick={deletePaletteHandler}
            />
            <DeleteDialog
                open={open}
                setOpen={setOpen}
                deletePaletteFinal={deletePaletteFinal}
            />
            <MiniPaletteColors colors={colors} />
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}
export default MiniPalette;