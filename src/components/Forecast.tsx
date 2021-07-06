import React from 'react';
import Day from './Day';
import '../css/Forecast.css';
import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';

const Forecast = () => {
    const weatherData = useSelector((state: RootState) => {
        return state.weatherData;
    }); 

    const date = new Date();

    console.log(weatherData)

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
        if(currentDay > 6) {currentDay = (currentDay - 1) - days.length;}
        return days[i + currentDay];
    }

    function getWeatherStatus(weatherStatus: string) {
        return "";
    }

    return (
        <div className='forecast'>
            <Day day={getDayName(date.getDay())} weather={weatherData && weatherData.daily[0].temp.eve}/>
            <Day day={getDayName(date.getDay() + 1)} weather={weatherData && weatherData.daily[1].temp.eve}/>
            <Day day={getDayName(date.getDay() + 2)} weather={weatherData && weatherData.daily[2].temp.eve}/>
            <Day day={getDayName(date.getDay() + 3)} weather={weatherData && weatherData.daily[3].temp.eve}/>
            <Day day={getDayName(date.getDay() + 4)} weather={weatherData && weatherData.daily[4].temp.eve}/>
        </div>
    );
};

export default Forecast;
