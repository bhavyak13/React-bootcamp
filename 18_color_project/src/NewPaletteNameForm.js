import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmojiPicker from './NewPaletteEmojiPicker';

function PaletteNameForm(props) {
    //initials
    const { paletteName, setPaletteName } = props;
    const { paletteNameOpen, setPaletteNameOpen } = props;
    const { error, setError } = props;
    const [errorMessage, setErrorMessage] = useState('');
    const { emojiPicker, setEmojiPicker } = props;

    //default with mui
    const handleClose = () => {
        setPaletteNameOpen(false);
    };

    //handlers
    const changeHandler = e => {
        setPaletteName(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (error) {
            return;
        } else {
            handleClose();
            setEmojiPicker(true);
        }
    }
    const emojiPickerClose = () => { setEmojiPicker(false); }

    //useEffect Hook
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
    }, [paletteName, props.palette, setError])

    //return
    return (
        <div>
            <Dialog open={emojiPicker} onClose={emojiPickerClose} >
                <DialogTitle
                    style={{ backgroundColor: 'black', color: 'white' }}
                >
                    Pick a Palette Emoji
                </DialogTitle>
                <DialogContent style={{ backgroundColor: 'black' }}>
                    <EmojiPicker onEmojiSelect={props.savePaletteHandler} />
                </DialogContent>
            </Dialog>

            <Dialog open={paletteNameOpen} onClose={handleClose}>
                <DialogTitle>Choose a Palette Name</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a new name for your new beautiful palette.
                        Make sure it's unique!
                    </DialogContentText>
                    <TextField
                        id="name"
                        type="text"
                        margin="normal"
                        label="Name"
                        variant="standard"
                        placeholder='Palette Name'
                        autoFocus
                        fullWidth
                        error={error}
                        value={paletteName}
                        helperText={errorMessage}
                        onChange={changeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <button className='btn btn-primary' onClick={submitHandler}>Save</button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
export default PaletteNameForm;
