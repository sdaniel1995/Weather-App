import * as WeatherIcons from 'weather-icons-react';
import '../css/LocalForecast.css';

const LocalForecast = (props:any) => {
    function convertToFarenheit() {
        return(((props.data.current.temp - 273.15) * (9/5) + 32).toFixed(2));
    }

    function convertToCelsius() {
        return((props.data.current.temp - 273.15).toFixed(2));
    }

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
                    {convertToFarenheit()}
                    <WeatherIcons.WiFahrenheit size={30}/>
                </span>
                <span>
                    {convertToCelsius()}
                    <WeatherIcons.WiCelsius size={30}/>
                </span>
            </div>
        </div>
    )
}

export default LocalForecast
