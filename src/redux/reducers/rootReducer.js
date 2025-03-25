import { combineReducers } from "redux";
// import tasksReducer from "./tasksReducer.js";
import weatherReducer from "./weatherReducer.js";

const rootReducer = combineReducers({
    // tasks: tasksReducer,
    weather: weatherReducer,
});

export default rootReducer;
