import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available. Add a new task above.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.title}
                            <button onClick={() => toggleTaskCompletion(task.id)}>
                                {task.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
