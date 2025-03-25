import React from 'react'
import Button from '@mui/material/Button';
import { Trash2 } from 'lucide-react';
import './styles/TaskList.css'
function TaskList() {
    const tasks = [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
    ]
    return (
        <>
            <ul className='task-list'>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.name}
                        <Button variant="string" startIcon={<Trash2 />}></Button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList