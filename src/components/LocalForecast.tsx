import * as WeatherIcons from 'weather-icons-react';
import '../css/LocalForecast.css';

export function convertToFarenheit(input: number) {
    return(((input - 273.15) * (9/5) + 32).toFixed(2));
}

export function convertToCelsius(input: number) {
    return((input - 273.15).toFixed(2));
}

const LocalForecast = (props:any) => {

    function getDay() {
        const date = new Date();
        const day = date.getDay();
        return(props.days[day]);
    }

    return (
        <div className="localForecast">
            <div className="localForecast-title">{props.title}</div>
            <div className="localForecast-main">
                <div><WeatherIcons.WiDayShowers size={100}/></div>
                <div>
                    <h2>{getDay()}</h2>
                    {props.data.current.weather[0].description}
                </div>
            </div>
            <div className="localForecast-footer">
                <span> 
                    {convertToFarenheit(props.data.current.temp)}
                    <WeatherIcons.WiFahrenheit size={30}/>
                </span>
                <span>
                    {convertToCelsius(props.data.current.temp)}
                    <WeatherIcons.WiCelsius size={30}/>
                </span>
            </div>
        </div>
    );
};

export default LocalForecast;
