import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from './NewPaletteHelpers'
import { useNavigate } from 'react-router-dom';
import PaletteNameForm from './NewPaletteNameForm';
import useStyles from './Styles/NewPaletteNavbarStyles';

const NewPaletteNavbar = (props) => {
    //intials
    const classes = useStyles(props);
    const { open, setOpen } = props;
    const [error, setError] = useState(false);
    const [paletteName, setPaletteName] = useState('Palette Name');
    const [paletteNameOpen, setPaletteNameOpen] = useState(false);
    const [emojiPicker, setEmojiPicker] = useState(false);

    //prebuilt wih mui
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    //useNavigate hook
    let navigate = useNavigate();
    const clickHandler = () => {
        navigate(-1);
    }

    //handlers
    const PaletteNameFormOpen = () => {
        setPaletteNameOpen(true);
    }
    const savePaletteHandler=(emojiObj)=>{
        if (error) {
            return
        }
        const newPalette = {
            id: paletteName.toLowerCase().replace(/ /g, '-'),
            paletteName: paletteName,
            colors: props.colors,
            emoji:emojiObj.native,
        };
        props.savePalette(newPalette);
        navigate('/');
    }


    //return
    return (
        <AppBar position="fixed" open={open} color='default' className={classes.root}>
            <Toolbar className={classes.Toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap component="div" className=''>
                    Create a palette
                </Typography>

                <div className={classes.navBtns}>
                    <button className={`btn ${classes.buttn} btn-danger`} onClick={clickHandler}>Go back</button>
                    <button className={`btn ${classes.buttn} btn-primary`} onClick={PaletteNameFormOpen}>Save</button>
                </div>

            </Toolbar>

            <PaletteNameForm
                palette={props.palette}
                paletteName={paletteName}
                setPaletteName={setPaletteName}
                error={error}
                setError={setError}
                paletteNameOpen={paletteNameOpen}
                setPaletteNameOpen={setPaletteNameOpen}
                savePaletteHandler={savePaletteHandler}
                emojiPicker={emojiPicker}
                setEmojiPicker={setEmojiPicker}
            />
        </AppBar>
    )
}
export default NewPaletteNavbar;