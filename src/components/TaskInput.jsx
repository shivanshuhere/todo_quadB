
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/todoSlice.js';

import { Button } from '@mui/material';
import { SquarePlus } from "lucide-react"
import "./styles/TaskInput.css"

const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todos)

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    };

    return (

        <div className='task-input'>
            <input placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            <Button
                onClick={handleAdd}
                variant="contained"
                startIcon={<SquarePlus />}
            >Add</Button>
        </div>
    )
};

export default TaskInput;
