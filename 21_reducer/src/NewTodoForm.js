import React, { useContext, useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useStyles from './Styles/NewTodoStyles';
import { TodoHelpersContext } from './Contexts/TodoHelpersContext';

export default function NewTodoForm() {
    const classes = useStyles();
    const [task, setTask] = useState('');
    const { createNewTodo } = useContext(TodoHelpersContext);
    const changeHandler = (e) => {
        setTask(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        createNewTodo(task);
        setTask('');
    }

    return (
        <Paper
            component="form"
            noValidate
            autoComplete="off"
            className={classes.Paper}
            onSubmit={submitHandler}
        >
            <TextField
                id="standard-basic"
                label="Add new Todo"
                variant="standard"
                fullWidth
                className={classes.textField}
                value={task}
                onChange={changeHandler}
            />
        </Paper>
    );
}