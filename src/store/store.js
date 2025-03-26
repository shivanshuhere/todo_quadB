import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import weatherReducer from "./weatherSlice.js";
import authReducer from "./authSlice.js";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        weather: weatherReducer,
        auth: authReducer,
    },
});

export default store;
