import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("todos") || [
    {
        id: nanoid(),
        name: "one",
    },
    {
        id: nanoid(),
        name: "two",
    },
    {
        id: nanoid(),
        name: "three",
    },
];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({ name: action.payload, id: nanoid() });
        },
        deleteTodo: (state, action) => {
            state.id = state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
