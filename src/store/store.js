import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./todoSlice.js"
import weatherReducer from "./weatherSlice.js"

const store = configureStore({
    reducer : {
        todos : todoReducer,
        weather : weatherReducer,
    },
})

export default store;