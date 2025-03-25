// import axios from "axios";

// export const fetchWeather = (location) => async (dispatch) => {
//     try {
//         const response = await axios.get(
//             `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
//         );
//         dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
//     } catch (error) {
//         dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
//     }
// };

import axios from "axios";

export const fetchWeather = (location) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
            }&units=metric`
        );
        dispatch({ type: "FETCH_WEATHER_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error.message });
    }
};
