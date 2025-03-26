import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { Trash2 } from 'lucide-react';
import './styles/TaskList.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from "../store/todoSlice.js"
function TaskList() {
    const tasks = useSelector((state) => state.todos)

    return (
        <>  {tasks ? "" : <p>No tasks</p>}
            <ul className='task-list'>
                {tasks?.map((task) => (
                    <li key={task.id}>
                        {task.name}
                        <Button variant="string" onClick={(e) => console.log(e)} startIcon={<Trash2 />}></Button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList