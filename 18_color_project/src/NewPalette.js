import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SideDrawer from './NewPaletteSideDrawer';
import { Main, DrawerHeader, drawerWidth } from './NewPaletteHelpers'
import DragableColorBoxList from './DragableColorBoxList';
import { arrayMoveImmutable } from "array-move";
import NewPaletteNavbar from './NewPaletteNavbar';
import useStyles from './Styles/NewPaletteStyles';


function NewPalette(props) {
    //initials
    const [open, setOpen] = useState(true);
    const [addColorBtnActive, setAddColorBtnActive] = useState(true);
    const [colors, setColors] = useState(props.palette[0].colors);

    // const [colors, setColors] = useState([]);
    // console.log(colors)
    // console.log(props.palette[0].colors)

    //prebuilt with mui
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

    //helper methods
    const addColor = newColor => {
        //new color -> {name,color}
        if (colors.length >= 20) {
            setAddColorBtnActive(false);
            return;
        }
        let newColors = [...colors, newColor];
        setColors(newColors);
    }
    const deleteColor = name => {
        console.log('deleted!')
        const updatedColors = colors.filter(clr => clr.name !== name);
        setColors(updatedColors);
    }
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(arrayMoveImmutable(colors, oldIndex, newIndex),)
    };

    //return
    const classes = useStyles(props);
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <CssBaseline />
            <NewPaletteNavbar
                colors={colors}
                palette={props.palette}
                open={open}
                setOpen={setOpen}
                savePalette={props.savePalette} />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                className={classes.obj}
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
                <div
                    className={classes.obj}
                >
                    <SideDrawer
                        addColor={addColor}
                        addColorBtnActive={addColorBtnActive}
                        colors={colors}
                        setColors={setColors}
                        palette={props.palette}
                    />
                </div>
            </Drawer>
            <Main
                open={open}
                style={{ height: "calc(100vh - 64px)" }}
            >
                <DrawerHeader />
                <DragableColorBoxList
                    colors={colors}
                    deleteColor={deleteColor}
                    axis='xy'
                    onSortEnd={onSortEnd}
                />
            </Main>
        </Box >
    );
}
export default NewPalette;