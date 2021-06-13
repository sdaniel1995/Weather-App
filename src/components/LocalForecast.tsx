import * as WeatherIcons from 'weather-icons-react';
import '../css/LocalForecast.css';

export function convertToFarenheit(input: number) {
    return(((input - 273.15) * (9/5) + 32).toFixed(2));
}

export function convertToCelsius(input: number) {
    return((input - 273.15).toFixed(2));
}

const LocalForecast = ({title, days, data, icon}:any) => {

    function getDay() {
        const date = new Date();
        const day = date.getDay();
        return(days[day]);
    }

    return (
        <div className="localForecast">
            <div className="localForecast-title">{title}</div>
            <div className="localForecast-main">
                <div><img id="weatherIcon" src={icon} alt="Weather Icon"/></div>
                <div>
                    <h2>{getDay()}</h2>
                    {data.current.weather[0].description}
                </div>
            </div>
            <div className="localForecast-footer">
                <span> 
                    {convertToFarenheit(data.current.temp)}
                    <WeatherIcons.WiFahrenheit size={30}/>
                </span>
                <span>
                    {convertToCelsius(data.current.temp)}
                    <WeatherIcons.WiCelsius size={30}/>
                </span>
            </div>
        </div>
    );
};

export default LocalForecast;
