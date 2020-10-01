import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ({icon}) => {

    if (!icon) {
        return null;
    }
     
    icon += '.png'

    const path = `/icons/${icon}`;
   
    return (
        <div className = "weather-icon">
            <h1> Today's Weather</h1>
            <img src = {process.env.PUBLIC_URL + path} alt = "Weather Icon"/>
        </div>
    )
}
export default WeatherIcon