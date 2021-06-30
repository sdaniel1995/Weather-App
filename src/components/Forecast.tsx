import React from 'react';
import Day from './Day';
import '../css/Forecast.css';
import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';

const Forecast = () => {
    const weatherData = useSelector((state: RootState) => {
        return state.weatherData;
    }); 

    return (
        <div className='forecast'>
            <Day day="Monday" weather={weatherData}/>
            <Day day="Tuesday" weather={weatherData}/>
            <Day day="Wednesday" weather={weatherData}/>
            <Day day="Thursday" weather={weatherData}/>
            <Day day="Friday" weather={weatherData} />
        </div>
    );
};

export default Forecast;
