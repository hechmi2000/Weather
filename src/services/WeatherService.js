
import axios from 'axios';

const API_KEY = `3c2bbcfa5410136118200c278cd6cc6f`; // Remplacez YOUR_API_KEY par votre clé API

// Fonction pour récupérer les données météorologiques actuelles pour une ville donnée
export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response;
  } catch (error) {
    throw error;
  }
};

// Fonction pour récupérer les prévisions météorologiques pour une ville donnée
export const getForecastData = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response;
  } catch (error) {
    throw error;
  }
};
