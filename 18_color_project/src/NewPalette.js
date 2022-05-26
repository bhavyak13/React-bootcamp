import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SideDrawer from './SideDrawerNewPalette';
import { Main, AppBar, DrawerHeader, drawerWidth } from './NewPaletteHelpers'
import { useNavigate } from 'react-router-dom';
import PaletteNameForm from './PaletteNameForm';
import DragableColorBoxList from './DragableColorBoxList';
import { arrayMove } from "react-sortable-hoc";

function NewPalette(props) {

    //initials
    const [open, setOpen] = useState(true);
    const [colors, setColors] = useState([]);
    const [addColorBtnActive, setAddColorBtnActive] = useState(true);
    const [paletteName, setPaletteName] = useState('');

    //prebuilt with mui
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    //useEffect Hook
    useEffect(() => {
        if (colors.length === 20) {
            setAddColorBtnActive(false);
        } else {
            setAddColorBtnActive(true);
        }
    }, [colors])

    //useNavigate hook
    let navigate = useNavigate();
    const clickHandler = () => {
        navigate(-1);
    }

    //helper methods
    const savePaletteHandler = () => {
        const newPalette = {
            id: paletteName.toLowerCase().replace(/ /g, '-'),
            paletteName: paletteName,
            colors: colors,
        };
        props.savePalette(newPalette);
        navigate('/');
    }
    const addColor = newColor => {
        //new color -> {name,color}
        let newColors = [...colors, newColor];
        setColors(newColors);
    }
    const deleteColor = name => {
        const updatedColors = colors.filter(clr => clr.name !== name);
        setColors(updatedColors);
    }
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(arrayMove(colors, oldIndex, newIndex),)
    };

    //return
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
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
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <SideDrawer
                    addColor={addColor}
                    addColorBtnActive={addColorBtnActive}
                    colors={colors}
                />
            </Drawer>
            <Main open={open} style={{ height: "calc(100vh - 64px)" }}>
                <DrawerHeader />
                <DragableColorBoxList
                    colors={colors}
                    deleteColor={deleteColor}
                    axis='xy'
                    onSortEnd={onSortEnd}
                />
                <PaletteNameForm
                    palette={props.palette}
                    paletteName={paletteName}
                    setPaletteName={setPaletteName}
                />
            </Main>
        </Box >
    );
}
export default NewPalette;