import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim() !== '') {
            dispatch(addTask({ id: Date.now(), text: task, priority: 'Medium' }));
            setTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
