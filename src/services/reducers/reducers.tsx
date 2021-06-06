import weatherReducer from './weather';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    weatherData: weatherReducer
});

export type RootState = ReturnType<typeof allReducers>
export default allReducers;