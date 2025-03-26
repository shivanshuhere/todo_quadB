import axios from "axios";

export const getWeather = async (city) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VITE_WEATHER_API_KEY}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
