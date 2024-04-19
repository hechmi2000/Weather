import React, { useState ,useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { getWeatherData, getForecastData } from './services/WeatherService';
import 'bootstrap/dist/css/bootstrap.min.css';
import max from './assets/max.jpg';
import moy from './assets/moy.jpg';
import min from './assets/min.jpg';
import Footer from './components/Footer';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null); // State pour l'image de fond
  const [backgroundStyle, setBackgroundStyle] = useState({}); // State pour les styles du background

  const handleSearch = async (city) => {
    try {
      const weatherResponse = await getWeatherData(city);
      const forecastResponse = await getForecastData(city);
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setError(null);
      setBackgroundImage(getBackgroundImage(weatherResponse.data.main.temp)); // Mettre à jour l'image de fond
    } catch (error) {
      setWeatherData(null);
      setForecastData(null);
      setError('City not found. Please try again.');
    }
  };

  const getBackgroundImage = (temperature) => {
    if (temperature < 10) {
      return min; // Retournez l'image pour les températures froides
    } else if (temperature < 25) {
      return moy; // Retournez l'image pour les températures modérées
    } else {
      return max; // Retournez l'image pour les températures chaudes
    }
  };

  // Mettre à jour les styles du background lorsque backgroundImage change
  useEffect(() => {
    setBackgroundStyle({
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    });
  }, [backgroundImage]);

  return (
    <div className="app" style={backgroundStyle}> {/* Utiliser l'image de fond */}
      <h1 className="text-center">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <div className="error">{error}</div>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
      <Footer />
      
    </div>
    
  );
  
}

export default App;
