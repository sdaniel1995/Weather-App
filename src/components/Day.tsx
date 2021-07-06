import React  from 'react';
import * as WiWeather from 'weather-icons-react';
import '../css/Days.css';

function convertToFarenheit(kelvinTemp: number) {
    return (kelvinTemp - 273.15) * (9/5) + 32;
}

function convertToCelsius(kelvinTemp: number) {
    return kelvinTemp - 273.15;
}

const Day = ({day, weather}: any) => {
    return (
        <div className="days" key={Math.random()}>
            <div className="dayName">{day}</div>
            <div className="weatherIcon"> <WiWeather.WiCloudy size={200}/></div>
            <div className="temp">
                {weather && convertToFarenheit(weather).toFixed(2)} <WiWeather.WiFahrenheit size={45}/>
                <br/>
                {weather && convertToCelsius(weather).toFixed(2)}  <WiWeather.WiCelsius size={45}/>
            </div>
        </div>
    );
};

export default Day;
 