import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ColorPicker from './ColorPicker';

function SideDrawer(props) {
    const [color, setColor] = useState('#397FE6');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');
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
            setName('');
        }
    }
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
    }, [name, color])
    return (
        <div>
            <h1>Design your Palette</h1>
            <div>
                <button type="button" className="btn btn-primary">Clear palette</button>
                <button type="button" className="btn btn-danger">Random color</button>
            </div>
            <ColorPicker
                color={color}
                setColor={setColor}
            />
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={submitHandler}
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
                className='btn'
                onClick={submitHandler}
                disabled={!props.addColorBtnActive}
            >{props.addColorBtnActive ? 'Add Color' : 'Palette full'}</button>
        </div>
    )
}
export default SideDrawer;
