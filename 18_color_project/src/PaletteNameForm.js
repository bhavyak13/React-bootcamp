import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function PaletteNameForm(props) {

    const { paletteName, setPaletteName } = props;
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const changeHandler = e => {
        setPaletteName(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (error) {
            return;
        } else {
            //
        }
    }

    useEffect(() => {
        const isUniqueName = props.palette.every(c => (c.paletteName.toLowerCase() !== paletteName.toLowerCase()));
        if (paletteName === '') {
            setError(true);
            setErrorMessage('Name is required!');
        } else if (!isUniqueName) {
            setError(true);
            setErrorMessage('Name already used!');
        } else {
            setError(false);
            setErrorMessage('');
        }
    }, [paletteName])
    return (
        < div >
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
                    value={paletteName}
                    helperText={errorMessage}
                    variant="filled"
                    onChange={changeHandler}
                />
            </Box>
        </div >
    )
}
export default PaletteNameForm;