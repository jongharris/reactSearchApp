import React from 'react';
import './Weather.css'
import WeatherDetails from './WeatherDetails';
import WeatherIcon from './WeatherIcon'
const Weather = ({data}) => {
    console.log(data);
 
    const icon = data != null ? data.data.weather[0].icon : undefined;
    console.log(icon);
    const details = data != null ? {name: data.data.name,
                                    temp: Math.round(data.data.main.temp - 273.15),
                                    description: data.data.weather[0].main} : undefined;

    return (
        <div className = "weather-wrapper">
            <WeatherIcon icon = {icon}  />
            <WeatherDetails data = {details}/>
        </div>
    )
}

export default Weather;