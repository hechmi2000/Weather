// weatherReducer.js

import { 
    SEARCH_WEATHER_REQUEST, 
    SEARCH_WEATHER_SUCCESS, 
    SEARCH_WEATHER_FAILURE, 
    GET_FORECAST_REQUEST, 
    GET_FORECAST_SUCCESS, 
    GET_FORECAST_FAILURE 
} from '../actions/ActionsTypes';

const initialState = {
    weatherData: null,
    forecastData: null,
    loading: false,
    error: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_WEATHER_REQUEST:
        case GET_FORECAST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SEARCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                weatherData: action.payload,
                error: null
            };
        case GET_FORECAST_SUCCESS:
            return {
                ...state,
                loading: false,
                forecastData: action.payload,
                error: null
            };
        case SEARCH_WEATHER_FAILURE:
        case GET_FORECAST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default weatherReducer;