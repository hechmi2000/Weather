// weatherActions.js

import axios from 'axios';
import { 
    SEARCH_WEATHER_REQUEST, 
    SEARCH_WEATHER_SUCCESS, 
    SEARCH_WEATHER_FAILURE, 
    GET_FORECAST_REQUEST, 
    GET_FORECAST_SUCCESS, 
    GET_FORECAST_FAILURE 
} from './ActionsTypes';

export const searchWeather = (city) => async (dispatch) => {
    dispatch({ type: SEARCH_WEATHER_REQUEST });

    try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
        dispatch({ type: SEARCH_WEATHER_SUCCESS, payload: weatherResponse.data });
    } catch (error) {
        dispatch({ type: SEARCH_WEATHER_FAILURE, payload: error.message });
    }
};

export const getForecast = (city) => async (dispatch) => {
    dispatch({ type: GET_FORECAST_REQUEST });

    try {
        const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=YOUR_API_KEY`);
        dispatch({ type: GET_FORECAST_SUCCESS, payload: forecastResponse.data });
    } catch (error) {
        dispatch({ type: GET_FORECAST_FAILURE, payload: error.message });
    }
};