export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: "DELETE_TASK",
    payload: taskId,
});

export const setTaskPriority = (taskId, priority) => ({
    type: "SET_TASK_PRIORITY",
    payload: { taskId, priority },
});
