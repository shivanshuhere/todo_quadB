import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../redux/actions/weatherActions.js';

const WeatherInfo = ({ location, weatherData, fetchWeather }) => {
    useEffect(() => {
        if (location) {
            fetchWeather(location);
        }
    }, [location, fetchWeather]);

    if (!weatherData) {
        return <p>Loading weather data...</p>;
    }

    return (
        <div>
            <h3>Weather in {location}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Condition: {weatherData.weather[0].description}</p>
            {/* Add more weather details as needed */}
        </div>
    );
};

const mapStateToProps = (state) => ({
    weatherData: state.weather.weatherData,
});

export default connect(mapStateToProps, { fetchWeather })(WeatherInfo);
