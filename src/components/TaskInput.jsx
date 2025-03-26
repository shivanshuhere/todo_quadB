import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { SquarePlus } from "lucide-react"
import "./styles/TaskInput.css"
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/todoSlice.js';

function TaskInput() {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const hanldeAddTask = () => {
        if (task) {
            dispatch(addTodo({
                name: task
            }))
            setTask('')
        }
    }



    return (
        <>
            <div className='task-input'>
                <input placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)} />
                <Button
                    onClick={hanldeAddTask}
                    variant="contained"
                    startIcon={<SquarePlus />}
                >Add</Button>
            </div>
        </>
    )
}

export default TaskInput