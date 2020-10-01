import React from 'react';
import './WeatherDetails.css'
const WeatherDetails = ({data}) => {

    if (!data) {
        return null;
    }
    return (
        <div className = "weather-details">
            <h1> {data.name}</h1>
            <h2>{data.temp} °C</h2>
            <h2> {data.description}</h2>
        </div>
    )
}

export default WeatherDetails;