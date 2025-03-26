import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const saveToLocalStorage = (state) => {
    localStorage.setItem("tasks", JSON.stringify(state));
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { text, priority } = action.payload;
            console.log("payload", action);

            state.push({
                id: nanoid(),
                text: text,
                priority: priority,
            });
            saveToLocalStorage(state);
        },

        deleteTask: (state, action) => {
            const updatedState = state.filter(
                (task) => task.id !== action.payload
            );
            saveToLocalStorage(updatedState);
            return updatedState;
        },
    },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
