import { useSelector } from 'react-redux';
import { RootState } from '../services/reducers/reducers';
import LocalForecast from './LocalForecast';
import WeeklyForecast from './WeeklyForecast';
import '../css/Forecast.css'


const Forecast = () => {
    const weatherData = useSelector((state: RootState) => {
        return state.weatherData;
    });

    const weekDays: Array<string> = [
        "Sunday", 
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    console.log(weatherData);
    return (
        <div className="forecast">
            {weatherData == null ? "": <LocalForecast title="Local Daily Weather Report" data={weatherData} days={weekDays}/>}
            {weatherData == null ? "": <WeeklyForecast title="Local Weekly Weather Report" data={weatherData} days={weekDays}/>}
        </div>
    )
}

export default Forecast
