import React, { useRef } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { SquarePlus } from "lucide-react"
import "./styles/TaskInput.css"
function TaskInput() {
    const taskInput = useRef(null)
    const tasks = [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },]

    const addTask = () => {
        const taskName = taskInput.current.value
        tasks.push({ id: tasks.length + 1, name: taskName })
    }
    return (
        <>
            <div className='task-input'>
                <input placeholder='Add Task' ref={taskInput} />
                <Button
                    onClick={addTask}
                    variant="contained"
                    startIcon={<SquarePlus />}
                >Add</Button>
            </div>
        </>
    )
}

export default TaskInput