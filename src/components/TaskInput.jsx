
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/todoSlice.js';

import { Button } from '@mui/material';
import { SquarePlus } from "lucide-react"
import "../styles/TaskInput.css"

const TaskInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todos)
    const [priority, setPriority] = useState('3'); // high, medium, low

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTask({ text, priority }));
            setText('');
        }
    };

    return (

        <div className='task-input'>
            <div>
                <input placeholder='Add Task'
                    className='add-task-input'
                    value={text} onChange={(e) => setText(e.target.value)} />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option >--- Select Priority ---</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <Button
                    onClick={handleAdd}
                    variant="contained"
                    startIcon={<SquarePlus />}
                >Add</Button>
            </div>
        </div>
    )
};

export default TaskInput;
