import React from 'react';
import Day from './Day';
import '../css/Forecast.css';
import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';

const Forecast = () => {
    const weatherData = useSelector((state: RootState) => {
        return state.weatherData;
    }); 

    const days: Array<String> = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    function getDayName(currentDay: number) {
        let i: number = 0;
        if(currentDay > 6) {currentDay = (currentDay - 1) - 6;}
        return days[i + currentDay];
    }

    return (
        <div className='forecast'>
            <Day day={getDayName(new Date().getDay())} weather={weatherData}/>
            <Day day={getDayName(new Date().getDay() + 1)} weather={weatherData}/>
            <Day day={getDayName(new Date().getDay() + 2)} weather={weatherData}/>
            <Day day={getDayName(new Date().getDay() + 3)} weather={weatherData}/>
            <Day day={getDayName(new Date().getDay() + 4)} weather={weatherData} />
        </div>
    );
};

export default Forecast;
