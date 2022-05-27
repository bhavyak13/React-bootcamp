import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ColorPicker from './ColorPicker';
import useStyle from './Styles/NewPaletteSideDrawer';

function SideDrawer(props) {
    const classes = useStyle(props);
    const [color, setColor] = useState('#397FE6');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('Name');

    //handlers
    const changeHandler = e => {
        setName(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (error) {
            return;
        } else {
            const newColor = { name, color }
            props.addColor(newColor);
            setName('Name');
        }
    }
    const clickHandler = () => {
        props.setColors([]);
    }
    const randomColor = () => {
        const allColors = props.palette.map(p => p.colors).flat();
        // console.log(allColors)

        let newColor;
        do {
            let rand = Math.floor(Math.random() * allColors.length);
            newColor = allColors[rand];
        } while ((props.colors.includes(newColor)));
        props.addColor(newColor);
    }

    //useEFfect hook
    useEffect(() => {
        const isUniqueName = props.colors.every(c => (c.name.toLowerCase() !== name.toLowerCase()));
        const isUnique = props.colors.every(c => (c.color.toLowerCase() !== color.toLowerCase()));
        if (name === '') {
            setError(true);
            setErrorMessage('Name is required!');
        } else if (!isUnique) {
            setError(true);
            setErrorMessage('Color must be unique!');
        } else if (!isUniqueName) {
            setError(true);
            setErrorMessage('Name already used!');
        } else {
            setError(false);
            setErrorMessage('');
        }
    }, [name, color, props.colors])

    return (
        <div className={classes.root}>
            <h1>Design your Palette</h1>
            <div className={classes.buttons}>
                <button type="button"
                    className={`btn btn-primary ${classes.button}`}
                    onClick={clickHandler}>
                    Clear palette
                </button>
                <button
                    type="button"
                    className={`btn btn-danger ${classes.button}`}
                    disabled={!props.addColorBtnActive}
                    onClick={randomColor}
                >
                    Random color
                </button>
            </div>


            <div className={classes.picker}>
                <ColorPicker
                    color={color}
                    setColor={setColor}
                />
                {/* </div> */}

                {/* <div> */}
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '95%' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={submitHandler}
                    className={classes.colorNameInput}
                >
                    <TextField
                        error={error}
                        label="Name"
                        value={name}
                        helperText={errorMessage}
                        variant="filled"
                        onChange={changeHandler}
                    />
                </Box>
            </div>

            <button
                style={{ backgroundColor: color }}
                // className={`btn`}
                className={`btn ${classes.addColor}`}
                onClick={submitHandler}
                disabled={!props.addColorBtnActive}
            >{props.addColorBtnActive ? 'Add Color' : 'Palette full'}</button>
        </div>
    )
}
export default SideDrawer;