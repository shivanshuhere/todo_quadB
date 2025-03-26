import React from 'react'
import Button from '@mui/material/Button';
import { HandHelping, Trash2 } from 'lucide-react';
import '../styles/TaskList.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from "../store/todoSlice.js"

const TaskList = () => {
    const tasks = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
    return (
        <>
            <ul className='task-list'>

                {sortedTasks?.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <Button variant="string" onClick={() => dispatch(deleteTask(task.id))} startIcon={<Trash2 />}></Button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskList;
