import React from 'react';
import '../css/Days.css';

const Day = ({day, weather}: any) => {
    return (
        <div className="days">
            <div className="dayName">{day}</div>
            <div className="weatherIcon"></div>
            <div className="temp">{weather && weather.current.temp}</div>
        </div>
    );
};

export default Day;
 