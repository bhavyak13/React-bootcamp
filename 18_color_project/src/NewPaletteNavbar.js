import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  AppBar } from './NewPaletteHelpers'
import { useNavigate } from 'react-router-dom';
import PaletteNameForm from './PaletteNameForm';

const NewPaletteNavbar = (props) => {
    const { open, setOpen } = props;
    const [error, setError] = useState(false);
    const [paletteName, setPaletteName] = useState('Palette Name');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    //useNavigate hook
    let navigate = useNavigate();
    const clickHandler = () => {
        navigate(-1);
    }

    const savePaletteHandler = () => {
        if(error){
            return
        }
        const newPalette = {
            id: paletteName.toLowerCase().replace(/ /g, '-'),
            paletteName: paletteName,
            colors: props.colors,
        };
        props.savePalette(newPalette);
        navigate('/');
    }

    return (
        <AppBar position="fixed" open={open} color='default'>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Persistent drawer
                </Typography>
                <button className='btn btn-danger' onClick={clickHandler}>Go back</button>
                <button className='btn btn-primary' onClick={savePaletteHandler}>Save Palette</button>
                <PaletteNameForm
                    palette={props.palette}
                    paletteName={paletteName}
                    setPaletteName={setPaletteName}
                    error={error}
                    setError={setError}
                />
            </Toolbar>
        </AppBar>
    )
}
export default NewPaletteNavbar;