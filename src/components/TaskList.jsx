// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask, setTaskPriority } from '../redux/actions/taskActions';

// const TaskList = () => {
//     const tasks = useSelector((state) => state.tasks.tasks);
//     const dispatch = useDispatch();

//     const handleDelete = (taskId) => {
//         dispatch(deleteTask(taskId));
//     };

//     const handlePriorityChange = (taskId, priority) => {
//         dispatch(setTaskPriority(taskId, priority));
//     };

//     return (
//         <div>
//             {tasks.map((task) => (
//                 <div key={task.id}>
//                     <span>{task.text}</span>
//                     <select
//                         value={task.priority}
//                         onChange={(e) => handlePriorityChange(task.id, e.target.value)}
//                     >
//                         <option value="High">High</option>
//                         <option value="Medium">Medium</option>
//                         <option value="Low">Low</option>
//                     </select>
//                     <button onClick={() => handleDelete(task.id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TaskList;

import WeatherInfo from './WeatherInfo';

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <p>{task.name}</p>
                    {task.location && <WeatherInfo location={task.location} />}
                </div>
            ))}
        </div>
    );
};

export default TaskList;