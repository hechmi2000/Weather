// Forecast.js
import React from 'react';

const Forecast = ({ forecastData }) => {
    return (
        <div className="forecast">
            {forecastData && forecastData.list && forecastData.list.map((item, index) => (
                <div key={index} className="forecast-item">
                    <p>{item.dt_txt}</p>
                    <p>{item.weather[0].main}</p>
                    <p>{item.main.temp}°C</p>
                </div>
            ))}
        </div>
    );
}

export default Forecast;
