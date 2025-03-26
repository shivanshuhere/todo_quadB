import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/WeatherInfo.css';

const WeatherInfo = () => {
    const { data, loading, error } = useSelector((state) => state.weather);

    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No weather data available.</p>;

    const { name, main, weather } = data;
    const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="weather-container">
            <h2>Weather in {name}</h2>
            <img src={weatherIcon} alt={weather[0].description} />
            <p>{weather[0].description}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Pressure: {main.pressure} hPa</p>
        </div>
    );
};

export default WeatherInfo;
