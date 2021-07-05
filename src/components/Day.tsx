import React from 'react';
import '../css/Days.css';

function convertToFarenheit(kelvinTemp: number) {
    return (kelvinTemp - 273.15) * (9/5) + 32;
}

function convertToCelsius(kelvinTemp: number) {
    return kelvinTemp - 273.15;
}

const Day = ({day, weather}: any) => {
    return (
        <div className="days">
            <div className="dayName">{day}</div>
            <div className="weatherIcon"></div>
            <div className="temp">
                {weather && convertToFarenheit(weather.current.temp).toFixed(2)} Farenheit
                <br/>
                {weather && convertToCelsius(weather.current.temp).toFixed(2)} Celsius
            </div>
        </div>
    );
};

export default Day;
 