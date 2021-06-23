import '../css/Days.css';
import { convertToCelsius, convertToFarenheit } from '../components/WeeklyForecast';
import * as WeatherIcons from 'weather-icons-react';


const Days = ({data, icon, day}: any) => {
    return (
        <div className="days">
            <div className="days-main">
                <span>
                    {convertToFarenheit(data.temp.max)}
                    <WeatherIcons.WiFahrenheit size={30}/>
                </span>
                <span>
                    {convertToCelsius(data.temp.max)}
                    <WeatherIcons.WiCelsius size={30}/>
                </span>
            </div>
            <div className="icon"><img id="weatherIcon" src={icon} alt="Weather Icon"/></div>
        </div>
    )
}

export default Days
