// store.js

import { createStore } from 'redux';
import weatherReducer from "./Reducers";

const store = createStore(weatherReducer)

export default store
