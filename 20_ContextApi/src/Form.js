import React, { useContext, useState } from 'react'
import SelectLanguage from './Select';
import { makeStyles } from '@mui/styles';
import { Avatar, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { red } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import words from './LanguageHelper';
import { LanguageContext } from './contexts/LanguageContext';

const useStyles = makeStyles({
    root: {
        marginTop: '3rem',
    },
    Box: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        width: '33%',
        margin: 'auto',
        padding: '1rem 2rem',
        '@media (max-width: 1000px)': {
            width: '50%',
        },
        '@media (max-width: 600px)': {
            width: '90%',
        }
    },
    bttn: {
        marginTop: '0.5rem',
    },
    topItems: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto'
    },

})

const Form = (props) => {
    const classes = useStyles(props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { language } = useContext(LanguageContext);

    const clickHandler = () => {

    }
    const changeEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.Box} variant='outlined'>
                <div className={classes.topItems}>
                    <Avatar sx={{ bgcolor: red[500], width: 56, height: 56 }}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h3" sx={{ marginBottom: '1rem' }}>{`${words[language].signIn}`}</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <SelectLanguage fullWidth />
                </div>
                <TextField
                    id="standard-basic"
                    label={`${words[language].email}`}
                    variant="standard"
                    type='email'
                    name='email'
                    value={email}
                    onChange={changeEmailHandler}
                    fullWidth
                    sx={{ marginBottom: '1rem' }}
                    required
                />
                <TextField
                    id="standard-basic"
                    label={`${words[language].password}`}
                    variant="standard"
                    type='password'
                    name='password'
                    value={password}
                    onChange={changePasswordHandler}
                    fullWidth
                    sx={{ marginBottom: '1rem' }}
                    required
                />
                <FormGroup >
                    <FormControlLabel control={<Checkbox />} label={`${words[language].remember}`} />
                </FormGroup>
                <button onClick={clickHandler} className={`btn btn-primary ${classes.bttn}`}>
                    {`${words[language].signIn}`}
                </button>
            </Paper>
        </div>
    )
}
export default Form;