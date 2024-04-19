import React from 'react';

const WeatherCard = ({ weatherData }) => {
    return (
        <div className="weather-card" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Centrer horizontalement
            justifyContent: 'center', // Centrer verticalement
            textAlign: 'center', // Centrer le texte
            width: '300px', // Largeur souhaitée
            height: '300px', // Hauteur souhaitée
            margin: 'auto', // Centrer l'élément horizontalement
        }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{weatherData.name}</div>
            <div style={{ fontStyle: 'italic' }}>{weatherData.weather[0].main}</div>
            <div style={{ fontSize: '18px', color: '#ff5733' }}>{weatherData.main.temp}°C</div>
            <div style={{ marginTop: '10px' }}>Humidity: {weatherData.main.humidity}%</div>
            <div style={{ marginTop: '10px' }}>Wind: {weatherData.wind.speed} m/s</div>
        </div>
    );
}

export default WeatherCard;

